import { TestBed } from '@angular/core/testing';

import { GmpUniqueService } from './gmp-unique.service';

describe('GmpUniqueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpUniqueService = TestBed.get(GmpUniqueService);
    expect(service).toBeTruthy();
  });
});
