import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDescriptionDialogComponent } from './course-description-dialog.component';

describe('CourseDescriptionDialogComponent', () => {
  let component: CourseDescriptionDialogComponent;
  let fixture: ComponentFixture<CourseDescriptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseDescriptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
