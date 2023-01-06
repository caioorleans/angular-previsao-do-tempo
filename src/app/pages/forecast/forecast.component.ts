import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  cityKey:string | null = null;

  constructor(private route:ActivatedRoute, private weatherService:WeatherService) { }

  ngOnInit(): void {
    this.cityKey = this.route.snapshot.paramMap.get('cityKey');
    if(this.cityKey){
      this.getForecastByCityKey(this.cityKey);
    }
  }

  getForecastByCityKey(cityKey: string){
    this.weatherService.getForecastByCityKey(cityKey).subscribe({
      next: (res) => {console.log(res)},
      error: (err) => {}
    })
  }

}
