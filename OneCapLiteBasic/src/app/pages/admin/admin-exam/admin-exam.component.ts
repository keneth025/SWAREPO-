import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { Exam, QuestionType } from 'src/app/core/data/model/exam.model';
import { ExamService } from 'src/app/core/data/service/exam.service';
import { ExcelService } from 'src/app/core/data/service/excel.service';
import { getHTMLText, searchString } from 'src/app/core/util/data.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { EditExamDialogComponent } from './dialogs/edit-exam-dialog/edit-exam-dialog.component';

@Component({
  selector: 'app-admin-exam',
  templateUrl: './admin-exam.component.html',
  styleUrls: ['./admin-exam.component.scss']
})
export class AdminExamComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private examService: ExamService,
    private excelService: ExcelService,
  ) {}

  pageIsLoading = false;
  dataIsLoading = true;

  examList = new BehaviorSubject<Exam[]>([]);

  keywordFilter = new FormControl('');
  ownerFilter = new FormControl(1);

  ownedExamList = combineLatest([
    this.ownerFilter.valueChanges.pipe(startWith(1)),
    this.examList,
  ]).pipe(
    map(([isOwner, List]) => {
      if (isOwner === 1) {
        return List.filter(e => e.IsOwner);
      }
      return List;
    })
  );

  filteredExamList = combineLatest([
    this.ownedExamList,
    this.keywordFilter.valueChanges.pipe(
      debounceTime(125),
      startWith('')
    ),
  ]).pipe(
    map(([examList, keyword]) => {
      if (keyword === '') {
        return examList;
      }
      return examList.filter(e => searchString(e.Title, keyword));
    }),
  );

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.dataIsLoading = true;
    const ExamList = await this.examService.getAll();
    this.examList.next(ExamList);
    this.dataIsLoading = false;
  }

  async create() {
    const addDialog = this.dialog.open(EditExamDialogComponent);

    const isSaved = await addDialog.afterClosed().toPromise();
    if (isSaved) {
      this.loadData();
    }
  }

  async update(data: Exam) {
    if (data.IsOwner) {
      const editDialog = this.dialog.open(EditExamDialogComponent, { data: { exam: new Exam(data) } });

      const isSaved = await editDialog.afterClosed().toPromise();
      if (isSaved) {
        this.loadData();
      }
    }
  }

  async delete(data: Exam) {
    const promptDialog = this.dialog.deleteDialog(data.Title);
    const isProceed = await promptDialog.afterClosed().toPromise();
    if (isProceed) {
      const loaderDialog = this.dialog.loaderDialog();
      await this.examService.delete(data);
      loaderDialog.close();
      await this.loadData();
    }
  }

  async export(data: Exam) {
    const loaderDialog = this.dialog.loaderDialog();
    let exportData = [
      ['Exam Name:', data.Title],
      ['Exam Description', getHTMLText(data.Description)],
      ['Exam Owners', data.Owners.map(e => e.Title).join(';')],
      ['Passing Rate', `${data.PassingRate}%`],
      ['Tags', data.Tags],
      [],
      ['Questions', 'Question Type', 'Answers', 'IsCorrect?']
    ];
    const questionList = await this.examService.getQuestionsAndAnswers(data.Id);
    for (const question of questionList) {
      const { QuestionText, Type, Answers, IsTrue } = question;
      let tempExport = [
        [QuestionText, Type, '', '']
      ];

      switch (Type) {
        case QuestionType.TRUE_OR_FALSE:
          tempExport[0][2] = `${IsTrue}`;
          break;
        case 'Single Answer':
        case 'Multiple Answers':
          for (const [idx, answer] of Answers.entries()) {
            if (idx === 0) {
              tempExport[0][2] = answer.AnswerText;
              tempExport[0][3] = `${answer.IsAnswer}`;
              continue;
            }
            tempExport = [
              ...tempExport, [
                '',
                '',
                answer.AnswerText,
                `${answer.IsAnswer}`,
              ]
            ];
          }
          break;
      }

      exportData = [
        ...exportData,
        ...tempExport,
      ];
    }

    await this.excelService.exportArrayAsExcelFile(exportData, `Exam Export - ${data.Title}`);
    loaderDialog.close();
  }

}
