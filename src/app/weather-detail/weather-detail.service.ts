import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailService {

  constructor(private http: HttpClient) { }

  getWeatherData(weather_options) {
    this.http.post('http://localhost:3001/weather', weather_options).toPromise().then(res => {
      console.log(res);
    }).catch(error=>{
      console.log(error);
      
    });
  }
}