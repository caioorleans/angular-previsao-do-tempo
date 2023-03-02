import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { TableColumnComponent } from './components/custom-table/table-column/table-column.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { CidadesComponent } from './pages/cidades/cidades.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { DatePipe } from '@angular/common';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UnespectedErrorComponent } from './pages/unespected-error/unespected-error.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CustomTableComponent,
    TableColumnComponent,
    HeaderComponent,
    FooterComponent,
    ForecastComponent,
    CidadesComponent,
    CityCardComponent,
    NotFoundComponent,
    UnespectedErrorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
