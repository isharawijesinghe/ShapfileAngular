import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherDetailService } from './weather-detail.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../common/dialog/dialog.component';
import { WeatherChartComponent } from '../weather-chart/weather-chart.component';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  private _selected_coord: any;
  @Input('selected_coord')
  set selectedCoord(coord) {
    this._selected_coord = coord
    this.patchCord(coord);
  }
  constructor(private fb: FormBuilder,
    private weatherService: WeatherDetailService,
    public dialog: MatDialog) { }


  weatherForm = this.fb.group({
    date_range: [''],
    coordinates: [{ value: '', disabled: true }, Validators.required]
  })

  ngOnInit() {
  }


  private patchCord(coord: any) {
    this.weatherForm.patchValue({
      coordinates: coord.lat + " , " + coord.lng
    })
  }


  onSubmit() {
    // this.openDialog();
    let options = {
      latitude: this._selected_coord.lat,
      longitude: this._selected_coord.lng,
      start_date: this.weatherForm.value.date_range[0],
      end_date: this.weatherForm.value.date_range[1]
    }

    // this.weatherService.getWeatherData(options)

    let rangeWeatherData = this.weatherService.getRangeWeatherData(options)

    const dialogRef = this.dialog.open(WeatherChartComponent, {
      height: '400px',
      width: '600px',
      data:rangeWeatherData
    })

    // dialogRef.afterClosed().subscribe(result => {

    // })
    console.log(this.weatherForm.value)
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      height: '400px',
      width: '600px',
      data: {
        title: "Attention",
        content_msg: "you have selected a large data range.This may take time to proceed. Do you want to continue?"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
