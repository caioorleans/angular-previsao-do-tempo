import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { RequestError } from 'src/app/models/requestError';
import { CityService } from 'src/app/services/city.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cityName:string | null = null;
  cities: City[] = [];

  constructor(private route:ActivatedRoute,private router:Router, private cityService: CityService, private storageService:StorageService) { }

  ngOnInit(): void {
    this.cityName = this.route.snapshot.paramMap.get('cityName');
    if(this.cityName){
      this.getCities(this.cityName);
    }
  }

  getCities(cityName: string) {
    this.cities = [];
    this.cityService.getCities(cityName).subscribe({
      next: (res) => {
        res.forEach(element => {
          let city: City = {
            Key: element.Key,
            LocalizedName: element.LocalizedName,
            Country: {
              ID: element.Country.ID,
              LocalizedName: element.Country.LocalizedName
            },
            AdministrativeArea: {
              ID: element.AdministrativeArea.ID,
              LocalizedName: element.AdministrativeArea.LocalizedName
            }
          }
          this.cities.push(city);
        })
      },
      error: (err:RequestError) => {
        if(err.Code === "404"){
          this.router.navigate(["not-found"]);
        }
        else{
          this.router.navigate(["error"]);
        }
      }
    });
  }

  goToForecast(city:City){
    this.storageService.setData("city",city);
    this.router.navigate(['forecast']);
  }

}
