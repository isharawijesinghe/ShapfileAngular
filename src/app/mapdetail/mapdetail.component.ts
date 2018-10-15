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
      for (let key in this._mapDetailObject) {
        this.Data.push(key);
        this.Val.push(this._mapDetailObject[key])
     }

     this.Data=[];
     this.Val=[];
  
  }

  get mapDetailObject(): any {
    return this._mapDetailObject;
  }

  constructor() { }

  ngOnInit() {}

  }



