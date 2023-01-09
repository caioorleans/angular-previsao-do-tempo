import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cityName:string | null = null;
  cities: City[] = [];

  constructor(private route:ActivatedRoute,private router:Router, private cityService: CityService) { }

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
      error: (err) => {
        console.log(err);
      }
    });
  }

  goToForecast(cityKey: number){
    this.router.navigate(['forecast',cityKey]);
  }

}
