import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRateDialogComponent } from './course-rate-dialog.component';

describe('CourseRateDialogComponent', () => {
  let component: CourseRateDialogComponent;
  let fixture: ComponentFixture<CourseRateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
