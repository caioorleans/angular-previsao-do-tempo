import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CurrentConditions } from 'src/app/models/currentConditions';
import { Forecast } from 'src/app/models/forecast';
import { RequestError } from 'src/app/models/requestError';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  forecast: Forecast[] = [];
  currentConditions: CurrentConditions = {
    WeatherText: "",
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
  cityName:string | null = null;
  administrativeArea:string | null = null;

  constructor(private route:ActivatedRoute, private weatherService:WeatherService, private datePipe: DatePipe,
    private storageService:StorageService,
    private router:Router) { }

  ngOnInit(): void {
    let city:City = this.storageService.getData("city");
    this.cityName = city.LocalizedName;
    this.cityKey = city.Key.toString();
    this.administrativeArea = city.AdministrativeArea.LocalizedName;
    if(this.cityKey){
      this.getCurrentConditions(this.cityKey);
      this.getForecastByCityKey(this.cityKey);
    }
  }

  getCurrentConditions(cityKey: string){
    this.weatherService.getCurrentConditionsByCityKey(cityKey).subscribe({
      next: (res) => {
        this.currentConditions = res[0]
      },
      error: (err) => {
        this.router.navigate(["message",err]);
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
      error: (err:RequestError) => {
        if(err.Code === "404"){
          this.router.navigate(["not-found"]);
        }
        else{
          this.router.navigate(["error"]);
        }
      }
    })
  }

}
