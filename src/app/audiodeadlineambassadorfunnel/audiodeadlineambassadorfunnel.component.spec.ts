import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiodeadlineambassadorfunnelComponent } from './audiodeadlineambassadorfunnel.component';

describe('AudiodeadlineambassadorfunnelComponent', () => {
  let component: AudiodeadlineambassadorfunnelComponent;
  let fixture: ComponentFixture<AudiodeadlineambassadorfunnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiodeadlineambassadorfunnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudiodeadlineambassadorfunnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
