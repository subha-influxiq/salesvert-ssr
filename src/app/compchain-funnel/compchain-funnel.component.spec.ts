import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompchainFunnelComponent } from './compchain-funnel.component';

describe('CompchainFunnelComponent', () => {
  let component: CompchainFunnelComponent;
  let fixture: ComponentFixture<CompchainFunnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompchainFunnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompchainFunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
