import { TestBed } from '@angular/core/testing';

import { TopicsForUsersService } from './topics-for-users.service';

describe('TopicsForAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopicsForUsersService = TestBed.get(TopicsForUsersService);
    expect(service).toBeTruthy();
  });
});
