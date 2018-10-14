import { TestBed, inject } from '@angular/core/testing';

import { WeatherDetailService } from './weather-detail.service';

describe('WeatherDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherDetailService]
    });
  });

  it('should be created', inject([WeatherDetailService], (service: WeatherDetailService) => {
    expect(service).toBeTruthy();
  }));
});
