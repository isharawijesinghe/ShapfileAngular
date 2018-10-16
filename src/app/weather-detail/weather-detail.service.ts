import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDetailService {
  weatherDataProcessed: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getWeatherData(weather_options): Observable<any> {
    // return this.http.post()
    return this.http.post('http://localhost:3001/weather', weather_options);
  }

  getRangeWeatherData(weather_options) {
    this.http.post('http://localhost:3001/weatherRange', weather_options).toPromise().then(res => {
      console.log(res);
      this.weatherDataProcessed.emit({ ...res, isRange: true })
      // return res;
    }).catch(error => {
      console.log(error);

    });
  }
}
