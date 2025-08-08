import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportProblemDialogComponent } from './report-problem-dialog.component';

describe('ReportProblemDialogComponent', () => {
  let component: ReportProblemDialogComponent;
  let fixture: ComponentFixture<ReportProblemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportProblemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportProblemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
