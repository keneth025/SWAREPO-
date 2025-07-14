import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';
import { LoaderDialogComponent } from './loader-dialog/loader-dialog.component';
import { PromptDialogComponent } from './prompt-dialog/prompt-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService extends MatDialog {

  loaderDialog(
    hasMessage = false,
    message: BehaviorSubject<string> = null
  ) {
    return this.open(LoaderDialogComponent, { data: { hasMessage, message } });
  }

  alertDialog(
    title: string,
    message: string,
    btnOkText: string = 'Ok',
    hideBtnOk = false,
  ) {
    return this.open(AlertDialogComponent, { data: { title, message, btnOkText, hideBtnOk } });
  }

  promptDialog(
    title: string | undefined,
    message: string,
    btnOkText: string = 'Yes',
    btnCancelText: string = 'No',
  ) {
    return this.open(PromptDialogComponent, {
      data: { title, message, btnOkText, btnCancelText }
    });
  }

  deleteDialog(itemName: string) {
    return this.open(ConfirmDeleteDialogComponent, { data: { itemName } });
  }
}
