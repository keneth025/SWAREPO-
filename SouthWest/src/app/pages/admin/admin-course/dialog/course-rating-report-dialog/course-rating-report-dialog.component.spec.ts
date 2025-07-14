import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRatingReportDialogComponent } from './course-rating-report-dialog.component';

describe('CourseRatingReportDialogComponent', () => {
  let component: CourseRatingReportDialogComponent;
  let fixture: ComponentFixture<CourseRatingReportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRatingReportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRatingReportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
