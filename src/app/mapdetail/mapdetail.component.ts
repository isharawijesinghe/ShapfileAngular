import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {



  public _mapDetailObject: any
  public _mapCoordinateObject: any;
  public mapDatailKeys = [];
  public isClick: boolean = false;
  display = false;

  constructor() { }

  ngOnInit() { }

  @Input() set mapDetailObject(mapObject: any) {
    this.mapDatailKeys = [];
    this._mapDetailObject = mapObject;
    console.log(this._mapDetailObject)
    if (this._mapDetailObject) {
      for (let key in this._mapDetailObject) {
        this.mapDatailKeys.push(key);
      }
    }

  }

  get mapDetailObject(): any {
    return this._mapDetailObject;
  }

  @Input() set mapCoordinateObject(coordinateObject: any) {
    this._mapCoordinateObject = coordinateObject;
    if (this._mapCoordinateObject) {
      console.log(this.isClick);
      this.isClick = true;
      this.display = true;
      this._mapCoordinateObject = coordinateObject;
    }
  }
  get mapCoordinateObject(): any {
    return this._mapCoordinateObject;
  }

}

