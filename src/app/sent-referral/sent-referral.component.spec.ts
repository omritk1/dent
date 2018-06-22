import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentReferralComponent } from './sent-referral.component';

describe('SentReferralComponent', () => {
  let component: SentReferralComponent;
  let fixture: ComponentFixture<SentReferralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentReferralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentReferralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
