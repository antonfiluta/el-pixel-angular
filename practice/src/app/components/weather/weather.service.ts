import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../../shared/models/weather.models';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http = inject(HttpClient);
  private baseUrl = 'https://api.open-meteo.com/v1/forecast';

  public getWeather(lat: number, lon: number): Observable<WeatherResponse> {
    const params = new HttpParams()
      .set('latitude', lat.toString())
      .set('longitude', lon.toString())
      .set('current_weather', 'true')
      .set('temperature_unit', 'celsius')
      .set('windspeed_unit', 'ms');

    return this.http.get<WeatherResponse>(this.baseUrl, { params });
  }
}
