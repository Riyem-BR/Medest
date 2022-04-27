import { TestBed } from '@angular/core/testing';

import { InterserviceService } from './interservice.service';

describe('InterserviceService', () => {
  let service: InterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
