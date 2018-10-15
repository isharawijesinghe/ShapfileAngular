import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-weather-chart',
  templateUrl: './weather-chart.component.html',
  styleUrls: ['./weather-chart.component.css']
})

export class WeatherChartComponent implements OnInit {
  chartData: any;
  private weatherData: any[];
  private dates: any[];
  selectionMode: any[];
  isRange: boolean;
  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.isRange = this.data.isRange;

    if (this.isRange) {
      this.weatherData = this.data.weather;
      this.dates = this.data.dates;
    } else {
      this.weatherData = this.data.hourly.data
    }

    // this.data = {
    //   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //   datasets: [
    //     {
    //       label: 'First Dataset',
    //       data: [65, 59, 80, 81, 56, 55, 40]
    //     },
    //     {
    //       label: 'Second Dataset',
    //       data: [28, 48, 40, 19, 86, 27, 90]
    //     }
    //   ]
    // }
  }

  ngOnInit() {
    if (this.isRange) {
      this.processRangeChart();
    } else {
      this.processSingleChart();
    }

  }

  processSingleChart() {
    const labels = Array(23).fill(0).map((e, i) => i + 1)
    const rainfallIntensities = [];
    this.weatherData.forEach(element => {
      rainfallIntensities.push(element.precipIntensity)
    })

    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: 'Hourly Rainfall',
          data: rainfallIntensities,
          borderColor: '#4bc0c0'
        }
      ]
    }
  }

  processRangeChart() {
    const labels = []
    const rainfallIntensities = []

    this.dates.forEach(element => {
      labels.push(new Date(element).getDate());
    });

    this.weatherData.forEach(element => {
      rainfallIntensities.push(element.daily.data[0].precipIntensity)
    })

    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: 'First Dataset',
          data: rainfallIntensities,
          borderColor: '#4bc0c0'
        }
      ]
    }

  }

}
