import { Component, Input, OnInit } from '@angular/core';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.css']
})
export class TableColumnComponent implements OnInit {


  @Input() forecast!:Forecast

  constructor() { }

  ngOnInit(): void {
  }

}
