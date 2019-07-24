import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NmsFunnelDoctorsComponent } from './nms-funnel-doctors.component';

describe('NmsFunnelDoctorsComponent', () => {
  let component: NmsFunnelDoctorsComponent;
  let fixture: ComponentFixture<NmsFunnelDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NmsFunnelDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NmsFunnelDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
