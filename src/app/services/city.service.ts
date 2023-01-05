import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';
import { Coordinates } from '../models/Coordinates';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseUrl: string;
  private apiKey: string;

  constructor(private Http:HttpClient) {
    this.baseUrl = environment.weatherForecastUrl;
    this.apiKey = environment.weatherApiKey;
  }

  getCities(cityName: string): Observable<City[]>{
    return this.Http.get<City[]>(`${this.baseUrl}locations/v1/cities/search?apikey=${this.apiKey}&q=${cityName}&language=pt-br&offset=10`)
  }

  getCityByCoordinates(coordinates: Coordinates): Observable<City>{
    return this.Http.get<City>(`${this.baseUrl}locations/v1/cities/geoposition/search?apikey=${this.apiKey}&q=${coordinates.lat},${coordinates.long}&language=pt-br`)
  }
}
