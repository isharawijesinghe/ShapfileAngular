import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapcomponentComponent } from './mapcomponent/mapcomponent.component';
import { MapdetailcomponentComponent } from './mapdetailcomponent/mapdetailcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MapcomponentComponent,
    MapdetailcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
