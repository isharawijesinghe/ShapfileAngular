import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherDetailComponent
  ],
  imports: [
    BrowserModule,
    Daterangepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
