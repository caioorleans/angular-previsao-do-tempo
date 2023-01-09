import { Component, Input, OnInit } from '@angular/core';
import { CurrentConditions } from 'src/app/models/currentConditions';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() weather!: Forecast;
  @Input() currentConditions!: CurrentConditions;

  constructor() { }

  ngOnInit(): void {
  }

}
