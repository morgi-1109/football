import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFixturesComponent } from './team-fixtures.component';

describe('TeamFixtureComponent', () => {
  let component: TeamFixturesComponent;
  let fixture: ComponentFixture<TeamFixturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamFixturesComponent]
    });
    fixture = TestBed.createComponent(TeamFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
