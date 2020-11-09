import { TestBed } from '@angular/core/testing';

import { RoleAuthenticateService } from './roleAuthenticate.service';

describe('RoleAuthenticateService', () => {
  let service: RoleAuthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleAuthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
