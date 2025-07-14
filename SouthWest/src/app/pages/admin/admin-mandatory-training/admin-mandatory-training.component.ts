import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { MandatoryTraining } from 'src/app/core/data/model/mandatory-training.model';
import { MandatoryTrainingService } from 'src/app/core/data/service/mandatory-training.service';
import { searchString } from 'src/app/core/util/data.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { EditMandatoryTrainingDialogComponent } from './dialogs/edit-mandatory-training-dialog/edit-mandatory-training-dialog.component';

@Component({
  selector: 'app-admin-mandatory-training',
  templateUrl: './admin-mandatory-training.component.html',
  styleUrls: ['./admin-mandatory-training.component.scss']
})
export class AdminMandatoryTrainingComponent implements OnInit {

  constructor(
    private dialog: DialogService,
    private mandatoryTrainingService: MandatoryTrainingService,
  ) {}

  pageIsLoading = false;
  dataIsLoading = true;

  mandatoryTrainingList = new BehaviorSubject<MandatoryTraining[]>([]);

  keywordFilter = new FormControl('');

  filteredMandatoryTrainingList = combineLatest([
    this.mandatoryTrainingList,
    this.keywordFilter.valueChanges.pipe(
      debounceTime(125),
      startWith('')
    ),
  ]).pipe(
    map(([mandatoryTrainingList, keyword]) => {
      if (keyword === '') {
        return mandatoryTrainingList;
      }
      return mandatoryTrainingList.filter(
        e => {
          const tagWords = [
            e.CourseNames.join(' '),
            e.ExamNames.join(' '),
          ].join(' ');
          return searchString(tagWords, keyword);
        }
      );
    }),
  );

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.dataIsLoading = true;
    const MandatoryTrainingList = await this.mandatoryTrainingService.getAll();
    this.mandatoryTrainingList.next(MandatoryTrainingList);
    this.dataIsLoading = false;
  }

  async create() {
    const addDialog = this.dialog.open(EditMandatoryTrainingDialogComponent);

    const isSaved = await addDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async update(data: MandatoryTraining) {
    const editDialog = this.dialog.open(
      EditMandatoryTrainingDialogComponent, {
        data: { mandatoryTraining: new MandatoryTraining(data) }
      }
    );

    const isSaved = await editDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async delete(data: MandatoryTraining) {
    const mandatoryTrainingTitle = [...data.CourseNames, ...data.ExamNames].join(', ');
    const promptDialog = this.dialog.deleteDialog(mandatoryTrainingTitle);
    const isProceed = await promptDialog.afterClosed().toPromise();

    if (isProceed) {
      const loader = this.dialog.loaderDialog();
      await this.mandatoryTrainingService.delete(data);
      loader.close();
      this.loadData();
    }
  }
}
