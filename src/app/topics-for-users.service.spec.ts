import { TestBed } from '@angular/core/testing';

import { TopicsForAdminService } from './topics-for-admin.service';

describe('TopicsForAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicsForAdminService = TestBed.get(TopicsForAdminService);
    expect(service).toBeTruthy();
  });
});
