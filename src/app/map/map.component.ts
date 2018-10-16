import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
import { MapService } from './map.service';
declare let L;
import { DetailsSidebarComponent } from '../details-sidebar/details-sidebar.component';



@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	mapObject: any;
	private map: any;
	selectedCoordinates: any;
	weatherDataResponse1 = {};
	weatherDataResponse2 = {};
	weatherDataResponse3 = {};

	weatherDataResponses: any[];

	default_coordinates: { lat: number, lng: number }[];

	checked = false;
	constructor(private mapService: MapService) {
		this.selectedCoordinates = {
			lat: 6.5626371894890445, lng: 80.38146972656251
		}

		this.weatherDataResponses = [this.weatherDataResponse1, this.weatherDataResponse2, this.weatherDataResponse3]


	}

	ngOnInit() {

		this.loadDefaultWeatherDataRequests();

		this.map = L.map('map').setView([6.5626371894890445, 80.38146972656251], 10);
		// http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png
		L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);
		this.map.doubleClickZoom.disable();
		this.map.on('dblclick', (e) => {
			let coord = e.latlng;
			this.selectedCoordinates = coord
		})
		var base = '../../assets/landslide.zip';
		// var base = this.mapService.getMapData('landslide.zip');
		var shpfile = new L.Shapefile(base, {
			onEachFeature: (feature, layer) => {

				// if (feature.properties) {
				// 	layer.bindPopup(Object.keys(feature.properties).map(function(k) {
				// 		// console.log(k + ": " +feature.properties[k])
				// 		return k + ": " + feature.properties[k];
				// 	}).join("<br />"), {
				// 		maxHeight: 200
				// 	});
				// }
				layer.on('click', (e) => {
					this.mapObject = e.target.feature.properties;
				});

			}

		});
		shpfile.addTo(this.map);
		shpfile.once("data:loaded", function () {
			console.log("finished loaded shapefile");
		});

	}
	getData() {
		this.mapService.getMapData('landslide.zip');
	};

	landslideChange(event) {
		this.checked = !event.checked;
	}

	landuseChange(event) {

	}

	geologyChange(event) {

	}

	loadDefaultWeatherDataRequests() {

	}

}


