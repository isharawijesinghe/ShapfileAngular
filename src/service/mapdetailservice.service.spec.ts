import { TestBed, inject } from '@angular/core/testing';

import { MapdetailserviceService } from './mapdetailservice.service';

describe('MapdetailserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapdetailserviceService]
    });
  });

  it('should be created', inject([MapdetailserviceService], (service: MapdetailserviceService) => {
    expect(service).toBeTruthy();
  }));
});
