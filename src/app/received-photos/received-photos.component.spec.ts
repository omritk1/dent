import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedPhotosComponent } from './received-photos.component';

describe('ReceivedPhotosComponent', () => {
  let component: ReceivedPhotosComponent;
  let fixture: ComponentFixture<ReceivedPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
