import { TestBed } from '@angular/core/testing';

import { UsersTablesForAdminService } from './users-tables-for-admin.service';

describe('UsersTablesForAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersTablesForAdminService = TestBed.get(UsersTablesForAdminService);
    expect(service).toBeTruthy();
  });
});
