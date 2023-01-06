import { Component } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service'
import { Coordinates } from './models/Coordinates';
import { WeatherService } from 'src/app/services/weather.service'
import { CityService } from './services/city.service';
import { City } from './models/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-previsao-do-tempo';
  coordinates: Coordinates | null = null;
  cities: City[] = [];

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private cityService: CityService,
    private router:Router) { }

  ngOnInit(): void {
  }

  getLocation() {
    this.coordinates = this.geolocationService.getLocation();
    if (this.coordinates) {
      console.log(this.coordinates)
      this.getCityByCoordinate(this.coordinates);
    }
  }

  getCityByCoordinate(coordinates:Coordinates){
    this.cityService.getCityByCoordinates(coordinates).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.getForecastByCityKey(res.Key)
        },
        error: (err) => {}
      }
    )
  }

  getForecastByCityKey(cityKey: number){
    this.weatherService.getForecastByCityKey(cityKey).subscribe({
      next: (res) => {console.log(res)},
      error: (err) => {}
    })
  }

  goToCities(cityName:string){
    this.router.navigate(['cities',cityName])
  }
}
