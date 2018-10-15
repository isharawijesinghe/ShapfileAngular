import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})
export class WeatherChartComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }


  }

  ngOnInit() {
  }

  processDailyChart() {
    const dailyData = []
    this.data.array.forEach(element => {

    });
  }

}
