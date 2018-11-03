import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
import { MapService } from './map.service'
declare let L;
declare let giscloud;
import { DetailsSidebarComponent } from '../details-sidebar/details-sidebar.component';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	public mapObject: any;
	private map: any;
	public selectedCoordinates: any;
	public coordinateObject: any;
	weatherDataResponse1 = {};
	weatherDataResponse2 = {};
	weatherDataResponse3 = {};
	weatherDataResponses: any[];
	isFetchingShapeFile = false;

	default_coordinates: { lat: number, lng: number }[];
	checked_landslide = false;

	topLayeredShapeFile: any;
	constructor(private mapService: MapService) {
		this.selectedCoordinates = {
			lat: 6.5626371894890445, lng: 80.38146972656251
		}
		// this.weatherDataResponses = [this.weatherDataResponse1, this.weatherDataResponse2, this.weatherDataResponse3]

	}





	ngOnInit() {
		// giscloud.ready(function () {
		// 	var mapId = 284,
		// 		b = new giscloud.Bounds(-11564616.631434001, -4696291.01784122, 15165106.411778938, 4970241.32721529),
		// 		viewer = new giscloud.Viewer('mapViewer', mapId).bounds(b);
		// });

		// giscloud.ready(function () {
		// 	var mapId = 284,
		// 		viewer = new giscloud.Viewer('mapViewer', mapId);
		// });

		this.loadDefaultWeatherDataRequests();
		// var vg = new VirtualGrid();
		this.map = L.map('map').setView([6.5626371894890445, 80.38146972656251], 10);
		// http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png
		// http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg
		L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(this.map);
		this.map.doubleClickZoom.disable();
		this.map.on('dblclick', (e) => {
			let coord = e.latlng;
			this.selectedCoordinates = coord
		})


		var base = '../../assets/mock-db/landslides.zip';

		this.loadShapeFile(base)
		this.checked_landslide = true
		// // var base = this.mapService.getMapData('landslide.zip');
		// var shpfile = new L.Shapefile(base, {
		// 	onEachFeature: (feature, layer) => {
		// 		layer.on('click', (e) => {
		// 			console.log(e);
		// 			this.mapObject = e.target.feature.properties;
		// 			this.coordinateObject = e.latlng;
		// 		});
		// 		this.map.fitBounds(layer.getBounds(), { maxZoom: 11 });
		// 	}
		// });
		// this.topLayeredShapeFile = shpfile;
		// shpfile.addTo(this.map);

		// shpfile.once("data:loaded", function () {
		// 	console.log("finished loaded shapefile");
		// });

	}
	getData() {
		this.mapService.getMapData('landslides.zip');
	};

	landslideChange(event) {
		this.handleSitchOperation(event, 'landslides');
	}

	landuseChange(event) {
		this.handleSitchOperation(event, 'landuse');

	}

	geologyChange(event) {
		this.handleSitchOperation(event, 'geology');
	}


	loadDefaultWeatherDataRequests() {

	}

	handleSitchOperation(event: any, urlExtension: string) {
		if (event.checked) {
			let url = this.mapService.getMockData(urlExtension)
			this.loadShapeFile(url)
		} else {
			this.map.removeLayer(this.topLayeredShapeFile)
		}
	}

	loadShapeFile(baseUrl: string) {
		this.isFetchingShapeFile = true;
		var shpfile = new L.Shapefile(baseUrl, {
			onEachFeature: (feature, layer) => {
				layer.on('click', (e) => {
					console.log(e);
					this.mapObject = e.target.feature.properties;
					this.coordinateObject = e.latlng;
				});
				this.map.fitBounds(layer.getBounds(), { maxZoom: 11 });
			}
		});
		this.topLayeredShapeFile = shpfile;
		shpfile.addTo(this.map);
		this.isFetchingShapeFile = false
	}



}
