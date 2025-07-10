import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { Curriculum } from 'src/app/core/data/model/curriculum.model';
import { CurriculumService } from 'src/app/core/data/service/curriculum.service';
import { searchString } from 'src/app/core/util/data.util';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { EditCurriculumDialogComponent } from './dialog/edit-curriculum-dialog/edit-curriculum-dialog.component';

@Component({
  selector: 'app-admin-curriculum',
  templateUrl: './admin-curriculum.component.html',
  styleUrls: ['./admin-curriculum.component.scss']
})
export class AdminCurriculumComponent implements OnInit {
  constructor(
    private dialog: DialogService,
    private curriculumService: CurriculumService,
  ) {}

  pageIsLoading = false;
  dataIsLoading = true;

  curriculumList = new BehaviorSubject<Curriculum[]>([]);

  keywordFilter = new FormControl('');
  ownerFilter = new FormControl(1);

  ownedCurriculumList = combineLatest([
    this.ownerFilter.valueChanges.pipe(startWith(1)),
    this.curriculumList,
  ]).pipe(
    map(([isOwner, List]) => {
      if (isOwner === 1) {
        return List.filter(e => e.IsOwner);
      }
      return List;
    })
  );

  filteredCurriculumList = combineLatest([
    this.keywordFilter.valueChanges.pipe(
      debounceTime(125),
      startWith('')
    ),
    this.ownedCurriculumList,
  ]).pipe(
    map(([keyword, curriculumList]) => {
      if (keyword === '') {
        return curriculumList;
      }
      return curriculumList.filter(e => searchString(e.Title, keyword));
    }),
  );

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.dataIsLoading = true;
    const CurriculumList = await this.curriculumService.getAll();
    this.curriculumList.next(CurriculumList);
    this.dataIsLoading = false;
  }

  async create() {
    const addDialog = this.dialog.open(EditCurriculumDialogComponent);

    const isSaved = await addDialog.afterClosed().toPromise();
    if (isSaved) {
      await this.loadData();
    }
  }

  async update(data: Curriculum) {
    if (data.IsOwner) {
      const editDialog = this.dialog.open(
        EditCurriculumDialogComponent,
        { data: { curriculum: new Curriculum(data) } }
      );
      const isSaved = await editDialog.afterClosed().toPromise();
      if (isSaved) {
        await this.loadData();
      }
    }
  }

  async delete(data: Curriculum) {
    const promptDialog = this.dialog.deleteDialog(data.Title);
    const isProceed = await promptDialog.afterClosed().toPromise();
    if (isProceed) {
      const loaderDialog = this.dialog.loaderDialog();
      await this.curriculumService.delete(data);
      loaderDialog.close();
      await this.loadData();
    }
  }

}
