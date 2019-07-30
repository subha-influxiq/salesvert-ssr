import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrinitiLandingComponent } from './triniti-landing.component';

describe('TrinitiLandingComponent', () => {
  let component: TrinitiLandingComponent;
  let fixture: ComponentFixture<TrinitiLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrinitiLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrinitiLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
