import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  // weatherDataProcessed: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  getMapData(filename) {
    this.http.get('http://localhost:3001/file/landslide.zip', filename).toPromise().then(res => {
      console.log(res);
      // this.weatherDataProcessed.emit(res)
    }).catch(error => {
      console.log(error);
    });
  }
}
