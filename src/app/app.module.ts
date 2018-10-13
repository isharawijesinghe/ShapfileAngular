import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapcomponentComponent } from './mapcomponent/mapcomponent.component';
import { MapdetailcomponentComponent } from './mapdetailcomponent/mapdetailcomponent.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherDetailComponent
    MapcomponentComponent,
    MapdetailcomponentComponent
  ],
  imports: [
    BrowserModule,
    Daterangepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
