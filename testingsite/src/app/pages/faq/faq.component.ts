import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { FAQService } from 'src/app/core/data/service/faq.service';
import { DialogService } from 'src/app/shared/dialog/dialog.service';
import { UserFeedbackDialogComponent } from 'src/app/shared/dialog/user-feedback-dialog/user-feedback-dialog.component';
import { searchString } from 'src/app/core/util/data.util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  constructor(
    private faqService: FAQService,
    private dialogService: DialogService,
  ) {}

  PageIsLoading = true;
  KeywordFilter = new FormControl();
  FAQHeaders: string[] = [];
  FAQItems = new BehaviorSubject<string[]>([]);
  FAQMap: { [Title: string]: any[] } = {};
  FilteredFAQItems = combineLatest([
    this.KeywordFilter.valueChanges.pipe<string>(startWith('')),
    this.FAQItems
  ]).pipe(
    map(
      ([Keyword, List]) => {
        return List.map(
          (item) => {
            let questions = this.FAQMap[item].sort(
              (a, b) => {
                const titleA = a.Question.trim().toLowerCase();
                const titleB = b.Question.trim().toLowerCase();
                if (titleA > titleB) {
                  return 1;
                }
                if (titleA < titleB) {
                  return -1;
                }
                return 0;
              }
            );

            if (Keyword.trim()) {
              questions = questions.filter(
                (qItem) => {
                  const { Question, Answer } = qItem;
                  return [Question, Answer].some(e => searchString(e || '', Keyword));
                }
              );
            }

            return {
              header: item,
              questions,
            };
          }
        ).filter(item => item.questions.length > 0);
      }
    )
  );

  ngOnInit() {
    this.initialLoad();
  }

  async initialLoad() {
    this.PageIsLoading = true;
    const FAQList = await this.faqService.getAll();
    let HeaderList: string[] = [];
    let tempData: { [Title: string]: any[] } = {};

    if (FAQList.length > 0) {
      for (const item of FAQList) {
        const { Category } = item;
        if (tempData[Category] === undefined) {
          HeaderList.push(Category);
          tempData = {
            ...tempData,
            [Category]: []
          };
        }
        tempData[Category].push(item);
      }
    }
    HeaderList = HeaderList.sort(
      (a, b) => {
        const titleA = a.trim().toLowerCase();
        const titleB = b.trim().toLowerCase();
        if (titleA === 'others') { return 1; }
        if (titleB === 'others') { return -1; }
        if (titleA > titleB) {
          return 1;
        }
        if (titleA < titleB) {
          return -1;
        }
        return 0;
      }
    );
    this.FAQMap = tempData;
    this.FAQItems.next(HeaderList);

    this.PageIsLoading = false;
  }

  scrollToId(Id: string) {
    const el = document.getElementById(Id);
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  submitForm() {
    const editDialog = this.dialogService.open(UserFeedbackDialogComponent);
  }

}
