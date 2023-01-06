import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from 'src/app/models/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-cidades',
  templateUrl: './cidades.component.html',
  styleUrls: ['./cidades.component.css']
})
export class CidadesComponent implements OnInit {

  cities: City[] = [];

  constructor(private route:ActivatedRoute, private cityService: CityService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getCities(params['cityName']);
    });
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
    console.log(this.cities);
  }

}
