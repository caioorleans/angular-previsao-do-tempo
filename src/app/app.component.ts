import { Component } from '@angular/core';
import {GeolocationService} from 'src/app/services/geolocation.service'
import { Coordinates } from './models/Coordinates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-previsao-do-tempo';
  coordenadas: Coordinates|null = null;

  constructor(private geolocationService:GeolocationService){}

  ngOnInit():void{
    this.coordenadas = this.geolocationService.getCurrentLocation();
    console.log(this.coordenadas);
  }
}
