import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {



  public _mapDetailObject : any
  public _mapCoordinateObject: any;
  public _mapType:any;
  public mapDatailKeys = [];
  public mapCoordinateKeys = [];
  

  @Input() set mapDetailObject(value:any){
      this.mapDatailKeys=[];
      this._mapDetailObject = value;
      for (let key in this._mapDetailObject) {
        this.mapDatailKeys.push(key);
     }
  }

  get mapDetailObject(): any {
    return this._mapDetailObject;
  }

  @Input() set mapCoordinateObject(value:any){
    this.mapCoordinateKeys=[];
    console.log(this._mapCoordinateObject);
    for (let key in this._mapCoordinateObject) {
      this.mapCoordinateKeys.push(key);
   }
   console.log(this.mapCoordinateKeys.length)
}

get mapCoordinateObject(): any {
  return this._mapCoordinateObject;
}


@Input() set mapType(value:any){
  this._mapType = value;
  console.log(this._mapType);
}

get mapType(): any {
return this._mapType;
}

  constructor() { }

  ngOnInit() {}

  }



