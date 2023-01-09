import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import { Coordinates } from 'src/app/models/Coordinates';
import { ForecastResponse } from '../models/forecastResponse';
import { CurrentConditions } from '../models/currentConditions';

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

  getForecastByCityKey(cityKey: string){
    return this.http.get<ForecastResponse>(`${this.baseUrl}/forecasts/v1/daily/5day/${cityKey}?apikey=${this.apiKey}&language=pt-br&metric=true`);
  }

  getCurrentConditionsByCityKey(cityKey: String):Observable<CurrentConditions[]>{
    return this.http.get<CurrentConditions[]>(`${this.baseUrl}/currentconditions/v1/${cityKey}?apikey=${this.apiKey}&language=pt-br&details=true`)
  }
}
