import { Component, OnInit, Input, Inject, Optional } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { WeatherDetailService } from './weather-detail.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../common/dialog/dialog.component';
import { WeatherChartComponent } from '../weather-chart/weather-chart.component';
import { EventsService } from '../common/evets.service';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  private _selected_coord: any;
  selectionMode: any[];
  selectedMode: any;
  weatherForm: FormGroup;
  isRangeData = false;
  weatherDataResponse: any;

  @Input('selected_coord')
  set selectedCoord(coord) {
    this._selected_coord = coord
    this.patchCord(this._selected_coord);
  }

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private weatherService: WeatherDetailService,
    public dialog: MatDialog,
    private eventsService: EventsService) {
    this.weatherForm = this.fb.group({
      date_range: [''],
      coordinates: [{ value: '', disabled: true }, Validators.required],
      // isRange: false,
      date: ['']
    })

    this.weatherDataResponse = { isLoaded: false }
  }

  ngOnInit() {
    // this.weatherService.weatherDataProcessed.subscribe(res => {
    //   res = { ...res, isRange: this.isRangeData };
    //   const dialogRef = this.dialog.open(WeatherChartComponent, {
    //     height: '600px',
    //     width: '1000px',
    //     data: res,
    //   })
    // })
    let options = {
      latitude: 6.7056,
      longitude: 80.3847,
      date: new Date()

    }

    this.weatherService.getWeatherData(options).toPromise().then(res => {
      this.weatherDataResponse = { ...res, isRange: false, isLoaded: true }
    });

    // this.weatherForm.controls['isRange'].valueChanges.subscribe(value => {
    //   this.isRangeData = value;
    // })

    // this.patchCord(this._selected_coord);
  }

  changeRetrivalOption(event) {
    this.isRangeData = event.checked;
  }
  private patchCord(coord: any) {
    this.weatherForm.patchValue({
      coordinates: 'Lat: ' + coord.lat.toFixed(3) + " , Lng: " + coord.lng.toFixed(3)
    })
  }

  onSubmit() {
    // this.openDialog();
    this.weatherDataResponse = { isLoaded: false }
    if (this.isRangeData) {
      let options = {
        latitude: this._selected_coord.lat,
        longitude: this._selected_coord.lng,
        start_date: this.weatherForm.value.date_range[0],
        end_date: this.weatherForm.value.date_range[1]
      }

      // this.weatherService.getWeatherData(options)

      this.weatherService.getRangeWeatherData(options).toPromise().then(res => {
        this.weatherDataResponse = { ...res, isRange: true, isLoaded: true }
      });
    } else {
      let options = {
        latitude: this._selected_coord.lat,
        longitude: this._selected_coord.lng,
        date: this.weatherForm.value.date

      }

      this.weatherService.getWeatherData(options).toPromise().then(res => {
        this.weatherDataResponse = { ...res, isRange: false, isLoaded: true }
      });
      // this.eventsService.asyncRequestSent.emit(true);

    }
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
