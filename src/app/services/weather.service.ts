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

  getForecast(coordenadas: Coordinates):Observable<ForecastResponse>{
    return this.http.get<ForecastResponse>(`${this.baseUrl}lat=${coordenadas.lat}&long=${coordenadas.long}&lang=pt_br$appid=${this.apiKey}`);
  }

  getForecastSubscribed(coordenadas:Coordinates):ForecastResponse{
    this.getForecast(coordenadas).subscribe(
      {
        next: (res) => {
          this.forecast = {
            cod: res.cod,
            list: res.list,
            city: res.city
          }
        },
        error: (err) => {
          this.forecast = {
            cod: err.code,
            list: [],
            city: {
              name:''
            }
          }
        }
      }
    )
    return this.forecast;
  }

}
