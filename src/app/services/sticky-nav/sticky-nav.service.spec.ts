import { TestBed } from '@angular/core/testing';

import { StickyNavService } from './sticky-nav.service';

describe('StickyNavService', () => {
  let service: StickyNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickyNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
