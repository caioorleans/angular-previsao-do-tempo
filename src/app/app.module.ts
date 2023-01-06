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
import { MessageComponent } from './pages/message/message.component';
import { CidadesComponent } from './pages/cidades/cidades.component';
import { CityCardComponent } from './components/city-card/city-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CustomTableComponent,
    TableColumnComponent,
    HeaderComponent,
    FooterComponent,
    ForecastComponent,
    MessageComponent,
    CidadesComponent,
    CityCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
