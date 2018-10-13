import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {MapdetailserviceService} from '../service/mapdetailservice.service';
import { MapComponent } from './map/map.component';
import { MapdetailComponent } from './mapdetail/mapdetail.component';

@NgModule({
  declarations: [
    AppComponent,
   
    MapComponent,
    MapdetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MapdetailserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
