import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatDialogRef } from '@angular/material/dialog';
import { GROUP } from 'src/environments/environment';
import { DialogService } from '../dialog.service';
import { AccountService } from 'src/app/core/data/service/account.service';
import { NavItem } from 'src/app/core/data/model/nav-bar.model';
import { RouteMap } from 'src/constant/nav-bar.constant';
import { UserFeedbackService } from 'src/app/core/data/service/user-feedback.service';
import { UserFeedback } from 'src/app/core/data/model/user-feedback.model';

@Component({
  templateUrl: './user-feedback-dialog.component.html',
  styleUrls: ['./user-feedback-dialog.component.scss']
})
export class UserFeedbackDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserFeedbackDialogComponent>,
    private userFeedbackService: UserFeedbackService,
    private dialog: DialogService,
    private accountService: AccountService,
  ) { }

  oneCapPages = [];

  submitionForm = new FormGroup({
    selectedPages: new FormControl([], Validators.minLength(1)),
    feedback: new FormControl('', Validators.required),
  });

  public editor = ClassicEditor;
  public editorConfig = {
    toolbar: ['bold', 'italic', 'link', 'bulletedList', 'numberedList'],
  };

  ngOnInit() {
    this.dialogRef.addPanelClass('onecaplite-dialog-container');
    const navItems = this.filterNavItems(this.accountService.account.Groups, RouteMap.map(e => e));
    this.oneCapPages = this.getFAQPages(navItems);
    this.userFeedbackService.getAll().then(console.log);
  }

  filterNavItems(assignedGroups: string[], currentNavItems?: NavItem[]): NavItem[] {
    if (assignedGroups.some((value) => value === GROUP.Owner)) {
      return currentNavItems;
    } else {
      return currentNavItems.filter(
        (navItem) => {
          if (navItem.AccessGroup) {
            return navItem.AccessGroup.some((group) => assignedGroups.indexOf(group) > -1);
          }
          return true;
        }
      ).map(
        (navItem) => {
          if (navItem.Children) {
            navItem.Children = this.filterNavItems(assignedGroups, navItem.Children);
          }
          return navItem;
        }
      );
    }
  }

  getFAQPages(navItems: NavItem[], parent?: string): string[] {
    return navItems.reduce(
      (returnValue, currentItem) => {
        let pageString = currentItem.DisplayName;
        if (parent) { pageString = `${parent} > ${currentItem.DisplayName}`; }

        if (currentItem.Children) {
          returnValue = [...returnValue, ...this.getFAQPages(currentItem.Children, pageString)];
        } else {
          returnValue = [...returnValue, pageString];
        }
        return returnValue;
      }, []
    );
  }

  async submitForm() {
    const loader = this.dialog.loaderDialog();
    const {
      selectedPages,
      feedback,
    } = this.submitionForm.value;
    const requestData = new UserFeedback({
      PageReported: selectedPages.join(', '),
      Feedback: feedback,
      User: this.accountService.account
    });
    await this.userFeedbackService.save(requestData);
    loader.close();
    const alertDialog = this.dialog.alertDialog(
      'Feedback Form',
      `Thank you for your feedback. We will respond to you via email.`,
    );
    await alertDialog.afterClosed().toPromise();
    this.dialogRef.close();
  }



}
