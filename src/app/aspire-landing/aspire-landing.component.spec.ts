import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspireLandingComponent } from './aspire-landing.component';

describe('AspireLandingComponent', () => {
  let component: AspireLandingComponent;
  let fixture: ComponentFixture<AspireLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspireLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspireLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
