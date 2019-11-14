import { TestBed } from '@angular/core/testing';

import { ServiceForFapiService } from './service-for-fapi.service';

describe('ServiceForFapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceForFapiService = TestBed.get(ServiceForFapiService);
    expect(service).toBeTruthy();
  });
});
