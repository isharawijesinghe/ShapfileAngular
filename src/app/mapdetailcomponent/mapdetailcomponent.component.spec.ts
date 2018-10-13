import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdetailcomponentComponent } from './mapdetailcomponent.component';

describe('MapdetailcomponentComponent', () => {
  let component: MapdetailcomponentComponent;
  let fixture: ComponentFixture<MapdetailcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapdetailcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
