import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFixtureDescriptionComponent } from './team-fixture-description.component';

describe('TeamFixtureDescriptionComponent', () => {
  let component: TeamFixtureDescriptionComponent;
  let fixture: ComponentFixture<TeamFixtureDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamFixtureDescriptionComponent]
    });
    fixture = TestBed.createComponent(TeamFixtureDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
