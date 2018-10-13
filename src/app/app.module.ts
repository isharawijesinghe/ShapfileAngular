import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
