import { TestBed } from '@angular/core/testing';

import { TutorialesService } from './tutoriales.service';

describe('TutorialesService', () => {
  let service: TutorialesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
