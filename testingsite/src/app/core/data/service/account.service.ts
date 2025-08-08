import { Injectable } from '@angular/core';
import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/profiles';
import '@pnp/sp/site-users';
import '@pnp/sp/site-groups';


import { Account } from '../model/account.model';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accountIsLoaded = false;
  account: Account = null;

  async initializeProfile() {
    const currentUser = sp.web.currentUser;
    const [
      currentAccount,
      currentGroups,
    ] = await Promise.all([
      currentUser(),
      currentUser.groups(),
    ]);
    const { Id, Title, Email, LoginName, IsSiteAdmin } = currentAccount;
    this.account = new Account({
      Id,
      Title,
      LoginName,
      IsSiteAdmin,
      EMail: Email,
      Groups: currentGroups.map(e => e.Title)
    });
    this.accountIsLoaded = true;
  }

}
