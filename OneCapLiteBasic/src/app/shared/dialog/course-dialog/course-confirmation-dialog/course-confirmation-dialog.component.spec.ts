import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseConfirmationDialogComponent } from './course-confirmation-dialog.component';

describe('CourseConfirmationDialogComponent', () => {
  let component: CourseConfirmationDialogComponent;
  let fixture: ComponentFixture<CourseConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
