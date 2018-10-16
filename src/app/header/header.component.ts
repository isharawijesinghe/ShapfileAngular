import { Component, OnInit } from '@angular/core';
import { WeatherDetailService } from '../weather-detail/weather-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  weatherDataResponse1: any;
  weatherDataResponse2: any;
  weatherDataResponse3: any;
  weatherDataResponse4: any;
  weatherDataResponses: any[];
  coordinates: { lat: number, lng: number }[];

  constructor(private weatherService: WeatherDetailService) {
    this.weatherDataResponse1 = { isLoaded: false }
    this.weatherDataResponse2 = { isLoaded: false }
    this.weatherDataResponse3 = { isLoaded: false }
    this.weatherDataResponse4 = { isLoaded: false }
    this.weatherDataResponses = [
      this.weatherDataResponse1,
      this.weatherDataResponse2,
      this.weatherDataResponse3,
      this.weatherDataResponse4
    ]

    this.coordinates = [
      { lat: 6.9934, lng: 81.0550 },
      { lat: 6.9497, lng: 80.7891 },
      { lat: 7.4675, lng: 80.6234 },
      { lat: 6.7056, lng: 80.3847 }
    ]
  }

  ngOnInit() {
    // this.getWeatherData();
  }


  getWeatherData() {

    for (let i = 0; i < 4; i++) {
      let options = {
        latitude: this.coordinates[i].lat,
        longitude: this.coordinates[i].lng,
        date: new Date()
      }
      this.weatherService.getWeatherData(options).toPromise().then(res => {
        this.weatherDataResponses[i] = { ...res, isRange: false, isLoaded: true };
      });
    }


  }

}
