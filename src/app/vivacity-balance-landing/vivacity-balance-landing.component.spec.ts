import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VivacityBalanceLandingComponent } from './vivacity-balance-landing.component';

describe('VivacityBalanceLandingComponent', () => {
  let component: VivacityBalanceLandingComponent;
  let fixture: ComponentFixture<VivacityBalanceLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VivacityBalanceLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VivacityBalanceLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
