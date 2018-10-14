import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { MapComponent } from './map/map.component';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherDetailService } from './weather-detail/weather-detail.service';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherDetailComponent,
    MapdetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Daterangepicker,
    ReactiveFormsModule
  ],
  providers: [WeatherDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
