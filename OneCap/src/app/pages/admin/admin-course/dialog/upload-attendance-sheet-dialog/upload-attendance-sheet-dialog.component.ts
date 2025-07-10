import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { UserService } from 'src/app/core/data/service/user.service';
import { validateEmailFormat } from 'src/app/core/util/data.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';

import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './upload-attendance-sheet-dialog.component.html',
  styleUrls: ['./upload-attendance-sheet-dialog.component.scss']
})
export class UploadAttendanceSheetDialogComponent implements OnInit {

  constructor(
    private userService: UserService,
    private excelService: ExcelService,
    private userCourseService: UserCourseService,
    private dialog: DialogService,
    public dialogRef: MatDialogRef<UploadAttendanceSheetDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { CourseList: Course[] },
  ) { }

  templateLink = environment.ATTENDANCE_TEMPLATE_LINK;
  CourseList: Course[] = [];

  UploadForm = new FormGroup({
    CourseId: new FormControl(null, {
      validators: [Validators.required]
    }),
    TemplateFile: new FormControl(null, {
      validators: [Validators.required]
    })
  });

  dialogName() { return `Upload Attendance`; }

  ngOnInit() {
    if (this.data) {
      this.CourseList = this.data.CourseList.filter(e => e.IsOwner);
    }
  }

  onFileChange($event) {
    this.UploadForm.get('TemplateFile').setValue(
      ($event.target as any).files[0]
    );
  }

  async submit() {
    const { CourseId, TemplateFile } = this.UploadForm.value;
    this.validateTemplate(TemplateFile, CourseId);
  }

  validateTemplate(file: File, courseId: number) {

    if (!file) { throw new Error('No file selected.'); }

    const reader: FileReader = new FileReader();
    reader.onload = (fileData: any) => {
      const data = this.excelService.convertExcelDataToJsonData(fileData.target.result);
      const formattedData = this.formatData(data);
      console.log('Formatted Data', formattedData);

      if (!formattedData.isValid) {

        this.dialog.alertDialog(
          this.dialogName(),
          formattedData.message,
        );

      } else {
        this.processUploadedData(formattedData, courseId);
      }

    };

    reader.readAsBinaryString(file);
  }

  formatData(data) {
    const wsdata: any[]  = data['Attendance Template'];
    let isValid   = true;
    let message   = '';
    let emailData = [];
    let invalidRows = [];

    const emailList = new Set<string>();

    if (!wsdata) {
      isValid = false;
      message = `Uploaded file doesn't have 'Attendance Template' worksheet.`;
    } else {
      emailData = wsdata.slice(1);
    }


    if (isValid) {
      for (const [index, item] of emailData.entries()) {
        const [email] = item;

        if (!validateEmailFormat(email)) {
          invalidRows = [...invalidRows, (index + 2)];
        }

        if (invalidRows.length > 0) { continue; }

        emailList.add(email);
      }
    }

    return {
      isValid,
      invalidRows,
      message,
      emailList: Array.from(emailList),
    };
  }

  async processUploadedData(processedData, selectedCourseId) {
    const { emailList } = processedData;
    const loaderDialog = this.dialog.loaderDialog();
    const emailObjArr = (await this.userService.batchResolveEmail(emailList));
    const UserCourseObjArr = emailObjArr.map(e => {
      if (e.found) {
        return new UserCourse({
          User: e.data,
          CourseId: selectedCourseId,
          Status: CourseStatus.Completed
        });
      }
      return null;
    }).filter(e => e);
    const returnData = await this.userCourseService.batchUploadOfAttendance(UserCourseObjArr);
    loaderDialog.close();
    this.dialogRef.close(true);
  }

}
