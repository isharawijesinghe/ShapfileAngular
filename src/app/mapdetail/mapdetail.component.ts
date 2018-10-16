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
  
 
  constructor() {}

  ngOnInit() {}

  @Input() set mapDetailObject(mapObject:any){
      this.mapDatailKeys=[];
      this._mapDetailObject = mapObject;
      for (let key in this._mapDetailObject) {
        this.mapDatailKeys.push(key);
     }
  }

  get mapDetailObject(): any {
    return this._mapDetailObject;
  }

  @Input() set mapCoordinateObject(coordinateObject:any){
    this._mapCoordinateObject = coordinateObject;
}

get mapCoordinateObject(): any {
  return this._mapCoordinateObject;
}


@Input() set mapType(mapType:any){
  this._mapType = mapType;
}

get mapType(): any {
return this._mapType;
}
}



