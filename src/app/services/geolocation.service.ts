import { Injectable } from '@angular/core';
import { Coordinates } from '../models/Coordinates';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  coord:Coordinates = {
    lat: 0,
    long: 0
  };

  constructor() {
    const currentLocation = this.getCurrentLocation();
    if(currentLocation){
      this.coord = currentLocation;
    }
  }

  getCurrentLocation():Coordinates | null{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.coord.lat = position.coords.latitude;
       this.coord.long = position.coords.longitude;
      });
      return this.coord;
    }
    return null;
  }

  getLocation():Coordinates{
    return this.coord;
  }
}
