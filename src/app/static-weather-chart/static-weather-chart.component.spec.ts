import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticWeatherChartComponent } from './static-weather-chart.component';

describe('StaticWeatherChartComponent', () => {
  let component: StaticWeatherChartComponent;
  let fixture: ComponentFixture<StaticWeatherChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticWeatherChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticWeatherChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
