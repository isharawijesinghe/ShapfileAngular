import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailService {
  weatherDataProcessed: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getWeatherData(weather_options) {
    this.http.post('http://localhost:3001/weather', weather_options).toPromise().then(res => {
      console.log(res);
      this.weatherDataProcessed.emit(res)
    }).catch(error => {
      console.log(error);
    });
  }

  getRangeWeatherData(weather_options) {
    this.http.post('http://localhost:3001/weatherRange', weather_options).toPromise().then(res => {
      console.log(res);
      this.weatherDataProcessed.emit(res)
      // return res;
    }).catch(error => {
      console.log(error);

    });
  }
}
