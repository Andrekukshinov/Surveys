import { TestBed } from '@angular/core/testing';

import { UsersTablesIfAdminService } from './users-tables-if-admin.service';

describe('UsersTablesForAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersTablesIfAdminService = TestBed.get(UsersTablesIfAdminService);
    expect(service).toBeTruthy();
  });
});
