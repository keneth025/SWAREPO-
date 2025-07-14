import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBasedComponent } from './exam-based.component';

describe('ExamBasedComponent', () => {
  let component: ExamBasedComponent;
  let fixture: ComponentFixture<ExamBasedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamBasedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
