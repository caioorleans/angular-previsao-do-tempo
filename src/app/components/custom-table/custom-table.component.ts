import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnInit {

  @Input() forecasts!:Forecast[]

  constructor() { }

  ngOnInit(): void {
  }

}
