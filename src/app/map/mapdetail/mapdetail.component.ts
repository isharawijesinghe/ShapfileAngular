import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mapdetail',
  templateUrl: './mapdetail.component.html',
  styleUrls: ['./mapdetail.component.css']
})
export class MapdetailComponent implements OnInit, OnChanges {
  
 
  @Input() mapObject : any

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.mapObject.currentValue);
  }


}
