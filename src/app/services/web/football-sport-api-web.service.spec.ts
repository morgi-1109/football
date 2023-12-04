import { TestBed } from '@angular/core/testing';

import { FootballSportApiWebService } from './football-sport-api-web.service';

describe('FootballSportApiWebService', () => {
  let service: FootballSportApiWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballSportApiWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
