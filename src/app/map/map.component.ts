import { Component, OnInit } from '@angular/core';
declare let L;
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const map = L.map('map').setView([6.80,80.400] , 10);
		L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
		var base = '../../assets/landslide.zip';
		var shpfile = new L.Shapefile(base, {
			onEachFeature: function(feature, layer) {
				
				if (feature.properties) {
					layer.bindPopup(Object.keys(feature.properties).map(function(k) {
						console.log(k + ": " +feature.properties[k])
						return k + ": " + feature.properties[k];
					}).join("<br />"), {
						maxHeight: 200
					});
				}

				layer.on('click', function (e) {
					console.log(e.target.feature.properties);
               
				  });
			}

		});
		shpfile.addTo(map);
		shpfile.once("data:loaded", function() {
			console.log("finished loaded shapefile");
		});

  }

  }


