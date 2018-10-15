import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit, OnChanges {
  
 
  @Input() mapObject : any
  private Data = [];
  private Val = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.mapObject)
    var keys = Object.keys(changes.mapObject.currentValue)
    for (let key in changes.mapObject.currentValue) {
      this.Data.push(key);
      this.Val.push(changes.mapObject.currentValue[key])
   }

  }


}
