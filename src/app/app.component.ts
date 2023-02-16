import { Component } from '@angular/core';
import { GeolocationService } from './services/geolocation.service'
import { Coordinates } from './models/Coordinates';
import { CityService } from './services/city.service';
import { City } from './models/city';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

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
    private cityService: CityService,
    private router:Router,
    private storageService:StorageService) { }

  ngOnInit(): void {
  }

  getLocation() {
    this.coordinates = this.geolocationService.getLocation();
    if (this.coordinates) {
      this.getCityByCoordinate(this.coordinates);
    }
  }

  getCityByCoordinate(coordinates:Coordinates){
    this.cityService.getCityByCoordinates(coordinates).subscribe(
      {
        next: (res) => {
          this.storageService.setData("city",res);
          this.router.navigate(['forecast']);
        },
        error: (err) => {
          this.router.navigate(["message",err])
        }
      }
    )
  }

  goToCities(cityName:string){
    this.router.navigate(['cities',cityName])
  }
}
