import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';


import { AccountService } from 'src/app/core/data/service/account.service';
import { environment, GROUP } from 'src/environments/environment';
import { NavItem } from 'src/app/core/data/model/nav-bar.model';
import { RouteMap } from 'src/constant/nav-bar.constant';
import { NavBarService } from './nav-bar.service';
import { ResolveEnd, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private navbarService: NavBarService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) { }

  @ViewChild('drawer') snav: MatDrawer;
  isLoading = true;
  appName = environment.AppTitle;
  navItems: NavItem[] = RouteMap;
  nameInitials = '';
  displayName = '';

  $isOpen = null;

  mobileObserver = this.breakpointObserver.observe('(max-width: 949px)');

  ngOnInit(): void {
    this.initialLoad();
  }

  async initialLoad() {
    this.isLoading = true;
    this.navItems = this.filterNavItems(this.navItems);
    this.displayName = this.accountService.account.Title;
    this.nameInitials = this.getInitials(this.displayName);
    this.isLoading = false;
  }

  private filterNavItems(currentNavItems?: NavItem[]) {
    const currentAccount = this.accountService.account;
    if (currentAccount.hasGroup(GROUP.Owner)) {
      return currentNavItems;
    } else {
      return currentNavItems.filter(
        (navItem) => {
          if (navItem.AccessGroup) {
            return navItem.AccessGroup.some((group) => currentAccount.hasGroup(group));
          }
          return true;
        }
      ).map(
        (navItem) => {
          if (navItem.Children) {
            navItem.Children = this.filterNavItems(navItem.Children);
          }
          return navItem;
        }
      );
    }
  }

  private getInitials(displayName: string): string {
    let initials: string;
    let tempArr: string[];
    initials = '';
    tempArr = displayName.split(/,| /);
    tempArr = tempArr.filter(e => e).map(e => e.trim().substring(0, 1).toUpperCase()).slice(0, 2);
    initials = tempArr.join('');
    return initials;
  }

  goToProfilePage() {
    this.router.navigate(['/employee-profile']);
  }

}
