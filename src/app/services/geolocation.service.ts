import { Injectable } from '@angular/core';
import { Coordinates } from '../models/Coordinates';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getCurrentLocation():Coordinates|null{
    let coord:Coordinates = {
      lat: 0,
      long: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       coord.lat = position.coords.latitude;
       coord.long = position.coords.longitude;
      });
      return coord;
    }
    else {
     alert("Geolocation is not supported by this browser.");
     return null;
    }
  }
}
