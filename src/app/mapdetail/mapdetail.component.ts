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
 
  constructor() {}

  ngOnInit() {}

  @Input() set mapDetailObject(mapObject:any){
      this.mapDatailKeys=[];
      this._mapDetailObject = mapObject;
      console.log(this._mapDetailObject);
      for (let key in this._mapDetailObject) {
        this.mapDatailKeys.push(key);
     }
     console.log(this.mapDatailKeys.length);
  }

  get mapDetailObject(): any {
    return this._mapDetailObject;
  }

  @Input() set mapCoordinateObject(coordinateObject:any){
    this.mapCoordinateKeys=[];
    this._mapDetailObject = coordinateObject;
    console.log(this._mapCoordinateObject);
    for (let key in this._mapCoordinateObject) {
      this.mapCoordinateKeys.push(key);
   }
   console.log(this.mapCoordinateKeys.length);
}

get mapCoordinateObject(): any {
  return this._mapCoordinateObject;
}


@Input() set mapType(mapType:any){
  this._mapType = mapType;
  console.log(this._mapType);
}

get mapType(): any {
return this._mapType;
}
}



