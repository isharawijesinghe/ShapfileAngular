import { Component, OnInit, Input } from '@angular/core';
import { WeatherDetailService } from '../weather-detail/weather-detail.service';
import { MatDialog } from '@angular/material';
import { WeatherChartComponent } from '../weather-chart/weather-chart.component';
import { EventsService } from '../common/evets.service';

@Component({
  selector: 'app-static-weather-chart',
  templateUrl: './static-weather-chart.component.html',
  styleUrls: ['./static-weather-chart.component.css']
})
export class StaticWeatherChartComponent implements OnInit {
  _response: any
  @Input('response')
  set response(res) {
    if (res) {
      if (res.isLoaded == true) {
        this.generateTemplate(res)
      }
    }
  }
  chartData: any;
  private weatherData: any[];
  private dates: any[];
  selectionMode: any[];
  isRange: boolean;
  retrived_response: any;
  isAsyncReqSent = false;
  isDataLoaded = false;
  constructor(private weatherService: WeatherDetailService,
    private eventsService: EventsService,
    public dialog: MatDialog) {
    this.chartData = {
    }
  }

  ngOnInit() {
    // this.weatherService.weatherDataProcessed.subscribe(res => {
    //   this.isAsyncReqSent = false;
    //   this.isDataLoaded = true;
    // })

    this.eventsService.asyncRequestSent.subscribe(res => {
      this.isAsyncReqSent = res;
    })


  }

  generateTemplate(res: any) {
    this.isAsyncReqSent = false;
    this.isRange = res.isRange;
    this.retrived_response = res;
    if (this.isRange) {
      this.weatherData = res.weather;
      this.dates = res.dates;
      this.processRangeChart();
    } else {
      this.weatherData = res.hourly.data
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
          borderColor: '#2f98b7',
          backgroundColor: '#4ec2e5',
          fontColor: 'white'
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

  openDialogChart() {
    const dialogRef = this.dialog.open(WeatherChartComponent, {
      height: '600px',
      width: '1000px',
      data: this.retrived_response,
    })
  }
}


