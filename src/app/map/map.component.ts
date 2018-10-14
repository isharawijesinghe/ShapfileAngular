import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
declare let L;



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit  {
	
   mapObject:any;

  constructor() { }

  ngOnInit() {

	

    const map = L.map('map').setView([6.80,80.400] , 10);
		L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
		var base = '../../assets/landslide.zip';
		var shpfile = new L.Shapefile(base, {
			onEachFeature:(feature, layer)=> {
				
				// if (feature.properties) {
				// 	layer.bindPopup(Object.keys(feature.properties).map(function(k) {
				// 		// console.log(k + ": " +feature.properties[k])
				// 		return k + ": " + feature.properties[k];
				// 	}).join("<br />"), {
				// 		maxHeight: 200
				// 	});
				// }
				layer.on('click',  (e) => {
					this.mapObject = e.target.feature.properties;
					});
				
			}
				
		});
		shpfile.addTo(map);
   	shpfile.once("data:loaded", () => {
			console.log("finished loaded shapefile");
		});

		

	}



  }


