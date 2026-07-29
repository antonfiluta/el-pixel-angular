import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { WeatherService } from './weather.service';
import { WeatherResponse } from '../../shared/models/weather.models';

interface City {
  name: string;
  lat: number;
  lon: number;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './weather.html',
})
export class Weather implements OnInit {
  private weatherService = inject(WeatherService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected cities: City[] = [
    { name: 'Минск', lat: 53.9045, lon: 27.5615 },
    { name: 'Гомель', lat: 52.4345, lon: 30.9754 },
    { name: 'Брест', lat: 52.0976, lon: 23.7341 },
    { name: 'Витебск', lat: 55.1904, lon: 30.2049 },
    { name: 'Гродно', lat: 53.6694, lon: 23.8131 },
  ];

  protected weather = signal<WeatherResponse | null>(null);
  protected isLoading = signal<boolean>(false);
  protected errorMessage = signal<string | null>(null);

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const cityName = params['city'];
      if (cityName) {
        const found = this.cities.find((c) => c.name === cityName);
        if (found) {
          this.loadWeather(found);
        } else {
          this.errorMessage.set('Неверные данные города');
        }
      }
    });
  }

  protected loadWeather(city: City) {
    this.weather.set(null);
    this.errorMessage.set(null);
    this.isLoading.set(true);

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { city: city.name },
    });

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
