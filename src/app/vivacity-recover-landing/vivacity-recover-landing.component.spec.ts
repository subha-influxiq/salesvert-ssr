import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VivacityRecoverLandingComponent } from './vivacity-recover-landing.component';

describe('VivacityRecoverLandingComponent', () => {
  let component: VivacityRecoverLandingComponent;
  let fixture: ComponentFixture<VivacityRecoverLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VivacityRecoverLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VivacityRecoverLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
