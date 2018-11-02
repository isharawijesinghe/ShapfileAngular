import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { ChartModule } from 'primeng/chart';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidebarModule } from 'primeng/sidebar';

import { AppComponent } from './app.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';
import { MapComponent } from './map/map.component';
import { MapdetailComponent } from './mapdetail/mapdetail.component';
// import { Daterangepicker } from 'ng2-daterangepicker';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WeatherDetailService } from './weather-detail/weather-detail.service';
import { DialogComponent } from './common/dialog/dialog.component';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import { HeaderComponent } from './header/header.component';
import { DetailsSidebarComponent } from './details-sidebar/details-sidebar.component';

import { MapService } from './map/map.service';
import { StaticWeatherChartComponent } from './static-weather-chart/static-weather-chart.component';
import { EventsService } from './common/evets.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WeatherDetailComponent,
    MapdetailComponent,
    DialogComponent,
    WeatherChartComponent,
    HeaderComponent,
    DetailsSidebarComponent,
    StaticWeatherChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ChartModule,
    CalendarModule,
    TableModule,
    ToggleButtonModule,
    InputSwitchModule,
    ProgressSpinnerModule,
    MatSlideToggleModule,
    SidebarModule,
    FontAwesomeModule
  ],
  providers: [WeatherDetailService, MapService, EventsService],
  entryComponents: [DialogComponent, WeatherChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
