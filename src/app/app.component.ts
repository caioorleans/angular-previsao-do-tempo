import { Component } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service'
import { Coordinates } from './models/Coordinates';
import { WeatherService } from 'src/app/services/weather.service'
import { ForecastResponse } from './models/forecastResponse';
import { ForecastMainInfo } from './models/forecastMainInfo';
import { CityService } from './services/city.service';
import { City } from './models/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-previsao-do-tempo';
  coordinates: Coordinates | null = null;
  cities: City[] = [];
  forecast: ForecastResponse = {
    cod: 0,
    list: [],
    city: {
      name: ''
    }
  };

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private cityService: CityService) { }

  ngOnInit(): void {
  }

  getLocation() {
    this.coordinates = this.geolocationService.getLocation();
    if (this.coordinates) {
      console.log(this.coordinates)
      this.getForecastByCoordinates(this.coordinates);
    }
  }

  getCities(cityName: string) {
    this.cityService.getCities(cityName).subscribe({
      next: (res) => {
        res.forEach(element => {
          let city: City = {
            Key: element.Key,
            LocalizedName: element.LocalizedName,
            Country: {
              ID: element.Country.ID,
              LocalizedName: element.Country.LocalizedName
            },
            AdministrativeArea: {
              ID: element.AdministrativeArea.ID,
              LocalizedName: element.AdministrativeArea.LocalizedName
            }
          }
          this.cities.push(city);
        })
      },
      error: (err) => {
        console.log(err);
      }
    });
    console.log(this.cities);
  }

  getForecastByCoordinates(coordenadas: Coordinates) {
    this.weatherService.getForecastByCoordinates(coordenadas).subscribe(
      {
        next: (res) => {
          this.forecast.cod = res.cod;
          this.forecast.city.name = res.city.name;
          res.list.forEach((list) => {
            let mainInfo: ForecastMainInfo = {
              main: {
                temp: list.main.temp,
                temp_min: list.main.temp_min,
                temp_max: list.main.temp_max,
                feels_like: list.main.feels_like
              },
              weather: [{
                description: list.weather[0].description,
                icon: list.weather[0].icon
              }],
              dt_txt: list.dt_txt
            };
            this.forecast.list.push(mainInfo);
          });
          console.log(this.forecast);
        },
        error: (err) => {
          console.log("Erro!");
        }
      }
    )
  }

  getForecastByCity(city: string) {
    this.weatherService.getForecastByCity(city).subscribe(
      {
        next: (res) => {
          this.forecast.cod = res.cod;
          this.forecast.city.name = res.city.name;
          res.list.forEach((list) => {
            let mainInfo: ForecastMainInfo = {
              main: {
                temp: list.main.temp,
                temp_min: list.main.temp_min,
                temp_max: list.main.temp_max,
                feels_like: list.main.feels_like
              },
              weather: [{
                description: list.weather[0].description,
                icon: list.weather[0].icon
              }],
              dt_txt: list.dt_txt
            };
            this.forecast.list.push(mainInfo);
          });
          console.log(this.forecast);
        },
        error: (err) => {
          console.log("Erro!");
        }
      }
    )
  }
}
