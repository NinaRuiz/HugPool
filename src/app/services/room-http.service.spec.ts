import { TestBed } from '@angular/core/testing';

import { RoomHttpService } from './room-http.service';

describe('RoomHttpService', () => {
  let service: RoomHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
