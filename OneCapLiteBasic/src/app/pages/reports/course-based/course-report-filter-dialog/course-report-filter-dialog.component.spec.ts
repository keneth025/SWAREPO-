import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseReportFilterDialogComponent } from './course-report-filter-dialog.component';

describe('CourseReportFilterDialogComponent', () => {
  let component: CourseReportFilterDialogComponent;
  let fixture: ComponentFixture<CourseReportFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseReportFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseReportFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
