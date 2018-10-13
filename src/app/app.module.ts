import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import {MapdetailserviceService} from '../service/mapdetailservice.service';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherDetailComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [MapdetailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
