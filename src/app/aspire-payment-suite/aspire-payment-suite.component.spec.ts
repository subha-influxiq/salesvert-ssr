import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AspirePaymentSuiteComponent } from './aspire-payment-suite.component';

describe('AspirePaymentSuiteComponent', () => {
  let component: AspirePaymentSuiteComponent;
  let fixture: ComponentFixture<AspirePaymentSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AspirePaymentSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AspirePaymentSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
