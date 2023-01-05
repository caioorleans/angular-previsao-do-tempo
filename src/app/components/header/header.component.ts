import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Coordinates } from 'src/app/models/Coordinates';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() coordinates =  new EventEmitter<Coordinates>();
  @Output() cityName = new EventEmitter<string>();

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit(): void {
  }

  sendCityName(cityName: string){
    this.cityName.emit(cityName);
  }

  sendCoordinates(){}
  getLocation() {
    let coordinates = this.geolocationService.getLocation();
    if (this.coordinates) {
      console.log(this.coordinates)
      this.coordinates.emit(coordinates);
    }
  }
}
