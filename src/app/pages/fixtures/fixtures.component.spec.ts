import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixturesComponent } from './fixtures.component';

describe('TeamGameComponent', () => {
  let component: FixturesComponent;
  let fixture: ComponentFixture<FixturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixturesComponent]
    });
    fixture = TestBed.createComponent(FixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
