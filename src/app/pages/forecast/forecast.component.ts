import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CurrentConditions } from 'src/app/models/currentConditions';
import { Forecast } from 'src/app/models/forecast';
import { ForecastResponse } from 'src/app/models/forecastResponse';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecast: Forecast[] = [];
  currentConditions: CurrentConditions = {
    WeatherText: "Pinto grande",
    WeatherIcon: 0,
    Temperature: {
      Metric: {
        Value: 0,
        Unit: ""
      }
    },
    RealFeelTemperature: {
      Metric: {
        Value: 0,
        Unit: ""
      }
    }
  };
  cityKey:string | null = null;

  constructor(private route:ActivatedRoute, private weatherService:WeatherService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.cityKey = this.route.snapshot.paramMap.get('cityKey');
    if(this.cityKey){
      this.getCurrentConditions(this.cityKey);
      this.getForecastByCityKey(this.cityKey);
    }
    console.log(this.currentConditions)
  }

  getCurrentConditions(cityKey: string){
    this.weatherService.getCurrentConditionsByCityKey(cityKey).subscribe({
      next: (res) => {
        console.log(res)
        this.currentConditions = res[0]
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  getForecastByCityKey(cityKey: string){
    this.weatherService.getForecastByCityKey(cityKey).subscribe({
      next: (res) => {
        res.DailyForecasts.forEach(item => {
          let daylyForecast: Forecast = {
            Date: "",
            Temperature:{
              Minimum:{
                Value: item.Temperature.Minimum.Value,
                Unit: item.Temperature.Minimum.Unit
              },
              Maximum:{
                Value: item.Temperature.Maximum.Value,
                Unit: item.Temperature.Maximum.Unit
              }
            },
            Day: {
              Icon: item.Day.Icon,
              IconPhrase: item.Day.IconPhrase
            },
            Night: {
              Icon: item.Night.Icon,
              IconPhrase: item.Night.IconPhrase
            }
          };
          let dataAux = this.datePipe.transform(item.Date, 'dd/MM');
          if(dataAux){
            daylyForecast.Date = dataAux;
          }
          this.forecast.push(daylyForecast);
        });
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
