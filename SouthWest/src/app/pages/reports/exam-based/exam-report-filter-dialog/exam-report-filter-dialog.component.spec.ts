import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamReportFilterDialogComponent } from './exam-report-filter-dialog.component';

describe('ExamReportFilterDialogComponent', () => {
  let component: ExamReportFilterDialogComponent;
  let fixture: ComponentFixture<ExamReportFilterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamReportFilterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamReportFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
