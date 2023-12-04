import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryMenuComponent } from './country-menu.component';

describe('CountryMenuComponent', () => {
  let component: CountryMenuComponent;
  let fixture: ComponentFixture<CountryMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryMenuComponent]
    });
    fixture = TestBed.createComponent(CountryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
