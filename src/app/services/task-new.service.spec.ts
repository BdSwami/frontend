import { TestBed } from '@angular/core/testing';

import { TaskNewService } from './task-new.service';

describe('TaskNewService', () => {
  let service: TaskNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
