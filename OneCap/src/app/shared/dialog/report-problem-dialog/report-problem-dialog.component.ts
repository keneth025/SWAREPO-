import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SPItem } from 'src/app/core/data/model/_model';
import { DialogService } from '../dialog.service';
import { UserFeedbackDialogComponent } from '../user-feedback-dialog/user-feedback-dialog.component';

type ItemType = 'Course' | 'Exam';

@Component({
  templateUrl: './report-problem-dialog.component.html',
  styleUrls: ['./report-problem-dialog.component.scss']
})
export class ReportProblemDialogComponent implements OnInit {

  itemType: ItemType =  'Course';
  item: SPItem = null;

  constructor(
    public dialogRef: MatDialogRef<ReportProblemDialogComponent>,
    private dialog: DialogService,
    @Inject(MAT_DIALOG_DATA) public data: {
      item: SPItem,
      itemType: 'Course' | 'Exam'
    },
  ) { }

  ngOnInit() {
    this.dialogRef.addPanelClass(['onecap-dialog-form', 'report-problem']);
    if (this.data) {
      const { item, itemType } = this.data;
      this.itemType = itemType;
      this.item = item;
    }
  }

  submitFeedback() {
    this.dialog.open(UserFeedbackDialogComponent);
  }

}
