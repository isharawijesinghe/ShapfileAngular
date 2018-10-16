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
    this.getFirstChart();
    this.getSecondChart();
    this.getThirdChart();
    this.getFourthChart();
    // this.getWeatherData();
  }


  getFirstChart() {
    let options = {
      latitude: this.coordinates[0].lat,
      longitude: this.coordinates[0].lng,
      date: new Date()
    }
    this.weatherService.getWeatherData(options).toPromise().then(res => {
      this.weatherDataResponse1 = { ...res, isRange: false, isLoaded: true };
    });
  }
  getSecondChart() {
    let options = {
      latitude: this.coordinates[1].lat,
      longitude: this.coordinates[1].lng,
      date: new Date()
    }
    this.weatherService.getWeatherData(options).toPromise().then(res => {
      this.weatherDataResponse2 = { ...res, isRange: false, isLoaded: true };
    });
  }
  getThirdChart() {
    let options = {
      latitude: this.coordinates[2].lat,
      longitude: this.coordinates[2].lng,
      date: new Date()
    }
    this.weatherService.getWeatherData(options).toPromise().then(res => {
      this.weatherDataResponse3 = { ...res, isRange: false, isLoaded: true };
    });
  }
  getFourthChart() {
    let options = {
      latitude: this.coordinates[3].lat,
      longitude: this.coordinates[3].lng,
      date: new Date()
    }
    this.weatherService.getWeatherData(options).toPromise().then(res => {
      this.weatherDataResponse4 = { ...res, isRange: false, isLoaded: true };
    });
  }

}
