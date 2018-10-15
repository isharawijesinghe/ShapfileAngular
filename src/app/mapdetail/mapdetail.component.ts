import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit {
  
 

  public _mapDetailObject : any
  private Data = [];
  private Val = [];

  @Input() set mapDetailObject(value:any){
      this._mapDetailObject = value;
      console.log(this._mapDetailObject);
  }

  get mapDetailObject(): any {
    return this._mapDetailObject;
  }

  constructor() { }

  ngOnInit() {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(this.mapObject)
  //   for (let key in changes.mapObject.currentValue) {
  //     this.Data.push(key);
  //     this.Val.push(changes.mapObject.currentValue[key])
  //  }

  }



