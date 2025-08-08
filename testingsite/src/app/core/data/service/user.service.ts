import { Injectable } from '@angular/core';
import { Person } from '../model/_model';
import { sp, PrincipalSource, PrincipalType } from '@pnp/sp';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  async searchUser(searchString: string) {
    return await sp.profiles.clientPeoplePickerSearchUser({
      AllowEmailAddresses: true,
      AllowMultipleEntities: false,
      MaximumEntitySuggestions: 25,
      QueryString: searchString,
      PrincipalType: PrincipalType.User,
      PrincipalSource: PrincipalSource.All,
    });
  }

  async getUserManager(loginName: string) {
    const managerData = await sp.profiles.getUserProfilePropertyFor(loginName, 'Manager');
    const managerDetail = await this.ensureUser(managerData);
    return managerDetail;
  }

  async ensureUser(loginName: string) {
    const user = await sp.web.ensureUser(loginName);
    const { Id, Title, Email, LoginName } = user.data;
    return new Person({
      Id,
      Title,
      EMail: Email,
      LoginName
    });
  }

  async resolveEmail(email: string) {
    return await sp.profiles.clientPeoplePickerResolveUser({
      AllowEmailAddresses: true,
      AllowMultipleEntities: false,
      MaximumEntitySuggestions: 1,
      QueryString: email,
      PrincipalType: PrincipalType.User,
      PrincipalSource: PrincipalSource.All,
    });
  }

  async batchResolveEmail(emails: string[]) {
    emails = emails.filter(e => e.trim());
    const chunk = 5;
    let returnItem: {email: string, found: boolean, data: Person}[] = [];
    for (let idx = 0; idx < emails.length; idx += chunk) {
      const chunkArr = emails.slice(idx, (idx + chunk));
      const chunkRequest = chunkArr.map(e =>
        this.resolveEmail(e)
        .then((user) => {
          if (user.EntityType === '') {
            return {
              email: e,
              found: false,
              data: null
            };
          }
          return this.ensureUser(user.Key).then((person) => ({email: e, found: true, data: person}));
        })
      );
      const requestData = await Promise.all(chunkRequest);
      returnItem = [...returnItem, ...requestData];
    }
    return returnItem;
  }

  async batchResolveUserEmailAndManager(emails: string[]) {
    emails = emails.filter(e => e.trim());
    const chunk = 5;
    let returnItem: {email: string, found: boolean, user: Person, manager: Person}[] = [];
    for (let idx = 0; idx < emails.length; idx += chunk) {
      const chunkArr = emails.slice(idx, (idx + chunk));
      const chunkRequest = chunkArr.map(e =>
        this.resolveEmail(e)
        .then((user) => {
          if (user.EntityType === '') {
            return {
              email: e,
              found: false,
              user: null,
              manager: null,
            };
          }
          return Promise.all([
            this.ensureUser(user.Key),
            this.getUserManager(user.Key),
          ]).then(([person, manager]) => ({email: e, found: true, user: person, manager}));
        })
      );
      const requestData = await Promise.all(chunkRequest);
      returnItem = [...returnItem, ...requestData];
    }
    return returnItem;
  }
}
