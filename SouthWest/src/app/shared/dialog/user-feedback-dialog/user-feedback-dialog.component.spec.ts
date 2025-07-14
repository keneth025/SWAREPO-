import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedbackDialogComponent } from './user-feedback-dialog.component';

describe('UserFeedbackDialogComponent', () => {
  let component: UserFeedbackDialogComponent;
  let fixture: ComponentFixture<UserFeedbackDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFeedbackDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
