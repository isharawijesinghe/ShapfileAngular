import { Component, OnInit } from '@angular/core';
declare let L;
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js';
import { HeaderComponent } from './header/header.component';
import { DetailsSidebarComponent } from './details-sidebar/details-sidebar.component';
import { WeatherDetailComponent } from './weather-detail/weather-detail.component';



declare var require: any

var JSZip = require("jszip");


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

	constructor() {}

	ngOnInit() {}}
