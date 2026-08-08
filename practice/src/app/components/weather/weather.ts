import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WeatherService } from './weather.service';
import { City, WeatherResponse } from '../../shared/models/weather.models';
import { WEATHER_CITIES } from '../../shared/utils/wether-cities';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './weather.html',
})
export class Weather implements OnInit {
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private weatherService = inject(WeatherService);

  private weatherSub: Subscription | null = null;

  protected cities = WEATHER_CITIES;

  protected weather = signal<WeatherResponse | null>(null);
  protected isLoading = signal<boolean>(false);
  protected errorMessage = signal<string | null>(null);
  protected selectedCity = signal<City | null>(null);

  ngOnInit() {
    this.route.queryParams
      .pipe(
        map((params) => params['city']),
        filter((city) => Boolean(city)),
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((cityName) => {
        const found = this.cities.find((c) => c.name === cityName);
        if (found) {
          this.loadWeather(found);
        } else {
          this.errorMessage.set('Неверные данные города');
        }
      });
  }

  protected selectCity(city: City) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { city: city.name },
    });
  }

  protected loadWeather(city: City) {
    this.weatherSub?.unsubscribe();

    this.weather.set(null);
    this.errorMessage.set(null);
    this.isLoading.set(true);
    this.selectedCity.set(city);

    this.weatherService.getWeather(city.lat, city.lon).subscribe({
      next: (data) => {
        this.weather.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Ошибка загрузки погоды:', err);
        this.errorMessage.set('Не удалось загрузить погоду. Попробуйте позже.');
        this.isLoading.set(false);
      },
    });
  }
}
