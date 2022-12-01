import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import { Coordinates } from 'src/app/models/Coordinates';
import { ForecastResponse } from '../models/forecastResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl:string;
  private apiKey: string;
  private forecast:ForecastResponse = <ForecastResponse>{};

  constructor(private http:HttpClient) {
    this.baseUrl = environment.weatherForecastUrl;
    this.apiKey = environment.weatherApiKey;
  }

  getForecastByCoordinates(coordinates: Coordinates):Observable<ForecastResponse>{
    return this.http.get<ForecastResponse>(`${this.baseUrl}lat=${coordinates.lat}&lon=${coordinates.long}&lang=pt_br&appid=${this.apiKey}`);
  }

  getForecastByCity(city: string){
    return this.http.get<ForecastResponse>(`${this.baseUrl}q=${city}&lang=pt_br&appid=${this.apiKey}`);
  }
}
