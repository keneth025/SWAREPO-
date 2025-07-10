import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAttendanceSheetDialogComponent } from './upload-attendance-sheet-dialog.component';

describe('UploadAttendanceSheetDialogComponent', () => {
  let component: UploadAttendanceSheetDialogComponent;
  let fixture: ComponentFixture<UploadAttendanceSheetDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAttendanceSheetDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAttendanceSheetDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
