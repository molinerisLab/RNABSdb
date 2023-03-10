import { TestBed } from '@angular/core/testing';

import { RnabsServiceService } from './rnabs-service.service';

describe('RnabsServiceService', () => {
  let service: RnabsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RnabsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
