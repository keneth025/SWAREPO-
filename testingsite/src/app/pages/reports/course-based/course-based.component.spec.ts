import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBasedComponent } from './course-based.component';

describe('CourseBasedComponent', () => {
  let component: CourseBasedComponent;
  let fixture: ComponentFixture<CourseBasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
