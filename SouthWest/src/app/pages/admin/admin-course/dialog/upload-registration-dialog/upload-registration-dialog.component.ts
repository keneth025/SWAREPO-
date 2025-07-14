import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { UserService } from 'src/app/core/data/service/user.service';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { UserCourseService } from 'src/app/core/data/service/user-course.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { Course, CourseStatus, UserCourse } from 'src/app/core/data/model/course.model';
import { searchString, validateEmailFormat } from 'src/app/core/util/data.util';

@Component({
  templateUrl: './upload-registration-dialog.component.html',
  styleUrls: ['./upload-registration-dialog.component.scss']
})
export class UploadRegistrationDialogComponent implements OnInit {

  constructor(
    private userService: UserService,
    private excelService: ExcelService,
    private userCourseService: UserCourseService,
    private dialog: DialogService,
    public dialogRef: MatDialogRef<UploadRegistrationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { CourseList: Course[] },
  ) { }

  templateLink = environment.REGISTRATION_TEMPLATE_LINK;
  CourseSearchFilter = new FormControl();
  CourseList = new BehaviorSubject<Course[]>([]);
  FilteredCourseList = combineLatest([
    this.CourseList.pipe(startWith<Course[]>([])),
    this.CourseSearchFilter.valueChanges.pipe(
      startWith(''),
    )
  ]).pipe(
    map(
      ([List, KeyWord]) => {
        if (KeyWord === '') {
          return List;
        }
        return List.filter(e => searchString(e.Title, KeyWord));
      }
    )
  );

  UploadForm = new FormGroup({
    CourseIds: new FormControl([], {
      validators: [
        Validators.required,
        Validators.minLength(1),
      ],
    }),
    TemplateFile: new FormControl(null, {
      validators: [Validators.required]
    })
  });




  dialogName() { return `Upload Attendance`; }

  ngOnInit() {
    if (this.data) {
      this.CourseList.next(this.data.CourseList.filter(e => e.IsOwner));
    }
  }

  onFileChange($event) {
    this.UploadForm.get('TemplateFile').setValue(
      ($event.target as any).files[0]
    );
  }

  async submit() {
    const { CourseIds, TemplateFile } = this.UploadForm.value;
    this.validateTemplate(TemplateFile, CourseIds);
  }

  validateTemplate(file: File, courseIds: number[]) {

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
        this.processUploadedData(formattedData, courseIds);
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

  async processUploadedData(processedData, selectedCourseIdArr: number[]) {
    const { emailList } = processedData;
    const loaderDialog = this.dialog.loaderDialog();
    const emailObjArr = (await this.userService.batchResolveEmail(emailList));
    let UserCourseObjArr: UserCourse[] = [];

    for (const selectedId of selectedCourseIdArr) {
      UserCourseObjArr = [
        ...UserCourseObjArr,
        ...emailObjArr
        .filter(e => e.found)
        .map(e => {
          if (e.found) {
            return new UserCourse({
              User: e.data,
              CourseId: selectedId,
              Status: CourseStatus.Pending
            });
          }
        })
      ];
    }
    const returnData = await this.userCourseService.batchUploadRegistration(UserCourseObjArr);
    loaderDialog.close();
    this.dialogRef.close(true);
  }

}
