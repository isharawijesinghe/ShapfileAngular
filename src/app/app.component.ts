import { Component, OnInit } from '@angular/core';
declare let L;
import '../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.js'
import * as JSZip from 'jszip';


declare var require: any




@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

	constructor() {}

	ngOnInit() {
		const map = L.map('map').setView([6.80,80.400] , 10);
		L.tileLayer('http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg', {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        // var zip = new JSZip();

        // var new_zip = new JSZip();
// more files !
// new_zip.loadAsync('shp.zip')
// .then(function(zip) {
//     // you now have every files contained in the loaded zip
//     console.log(zip)
//     new_zip.file("hello.txt").async("string"); // a promise of "Hello World\n"
// });

        // 	var m = L.map('map').setView([42.09618442380296, -71.5045166015625], 8);
		// var watercolor = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		// 	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
		// }).addTo(m);

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
					// e = event
					console.log(e.target.feature.properties);
					// You can make your ajax call declaration here
					//$.ajax(...
				  });
			}


		});
		shpfile.addTo(map);
		shpfile.once("data:loaded", function() {
			console.log("finished loaded shapefile");
		});

}}
