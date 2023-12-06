import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadStandingTableComponent } from './lead-standing-table.component';

describe('CountryLeadStandingComponent', () => {
  let component: LeadStandingTableComponent;
  let fixture: ComponentFixture<LeadStandingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadStandingTableComponent]
    });
    fixture = TestBed.createComponent(LeadStandingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
