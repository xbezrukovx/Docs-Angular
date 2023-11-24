import { TestBed } from '@angular/core/testing';

import { ViewerserviceService } from './viewerservice.service';

describe('ViewerserviceService', () => {
  let service: ViewerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
