import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobrazolLandingComponent } from './cobrazol-landing.component';

describe('CobrazolLandingComponent', () => {
  let component: CobrazolLandingComponent;
  let fixture: ComponentFixture<CobrazolLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobrazolLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobrazolLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
