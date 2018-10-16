import { Component, OnInit } from '@angular/core';
import { WeatherDetailService } from '../weather-detail/weather-detail.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  weatherDataResponse: any;
  constructor(private weatherService: WeatherDetailService) {
    this.weatherDataResponse = { isLoaded: false }
  }

  ngOnInit() {
    this.getWeatherData();
  }


  getWeatherData() {
    let options = {
      latitude: 6.5626371894890445,
      longitude: 80.38146972656251,
      date: new Date()
    }
    this.weatherService.getWeatherData(options).toPromise().then(res => {
      this.weatherDataResponse = { ...res, isRange: false, isLoaded: true };
    });
  }

}
