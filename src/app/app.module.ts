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

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    CustomTableComponent,
    TableColumnComponent,
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
