import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { GROUP } from 'src/environments/environment';
import { AccountService } from './account.service';
import { NavItem } from '../model/nav-bar.model';
import { RouteMap } from 'src/constant/nav-bar.constant';

@Injectable({
  providedIn: 'root'
})
export class AccessGuardService implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router,
  ) { }

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.accountService.accountIsLoaded) {
      await this.accountService.initializeProfile();
    }
    const { account } = this.accountService;
    if (account.IsSiteOwner) { return true; }

    const activePageAccessGroups: string[] = this.getActivePageAccessGroups(state.url);
    if (activePageAccessGroups.length === 0) {
      return true;
    }
    if (activePageAccessGroups.some((e) => account.Groups.indexOf(e) > -1)) {
      return true;
    }
    this.router.navigate(['access-denied'], { queryParams: { url: state.url } });
    return false;
  }

  private getActivePageAccessGroups(url: string, activeNavList?: NavItem[], activeNavItemAccessGroups?: string[]): string[] {
    const self = this;
    // checking if activeNavList Parameter is available
    if (activeNavList === undefined) { activeNavList = RouteMap; }
    if (activeNavItemAccessGroups === undefined) { activeNavItemAccessGroups = []; }

    // Finding the active navigation item in the list
    const activeNavItem: NavItem = activeNavList
      .filter(navItem => !navItem.Children || navItem.Children.length === 0)
      .find(navItem => url.indexOf(navItem.Route) === 0);

    // Return accessGroup if found.
    if (activeNavItem) {
      if (activeNavItem.AccessGroup) {
        activeNavItemAccessGroups = activeNavItem.AccessGroup;
      }
      return activeNavItemAccessGroups;
    }

    // if not found, get the parent navigation item related to current nav item
    const parentNavItem: NavItem = activeNavList
      .filter(navItem => navItem.Children && navItem.Children.length > 0)
      .find(navItem => url.indexOf(navItem.Route) === 0);

    // do a recursion once parent item is found
    if (parentNavItem) {
      if (parentNavItem.AccessGroup) {
        activeNavItemAccessGroups = parentNavItem.AccessGroup;
      }
      return self.getActivePageAccessGroups(url, parentNavItem.Children, activeNavItemAccessGroups);
    }

    console.error(`Error: (Route ('${url}') not registered in Route Map)`);
    return undefined;
  }
}
