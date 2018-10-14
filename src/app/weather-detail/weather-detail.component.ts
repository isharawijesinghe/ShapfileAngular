import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WeatherDetailService } from './weather-detail.service';

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
    private weatherService: WeatherDetailService) { }


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
    let options = {
      latitude: this._selected_coord.lat,
      longitude: this._selected_coord.lng
    }
    this.weatherService.getWeatherData(options)
  }

  public daterange: any = {};

  // see original project for full list of options
  // can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  public selectedDate(value: any, datepicker?: any) {
    // this is the date the iser selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // or manupulat your own internal property
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

}
