import { TestBed } from '@angular/core/testing';

import { UpladresumeService } from './upladresume.service';

describe('UpladresumeService', () => {
  let service: UpladresumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpladresumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
