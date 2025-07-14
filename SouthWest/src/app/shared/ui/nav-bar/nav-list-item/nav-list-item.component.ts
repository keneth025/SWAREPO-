import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap, withLatestFrom } from 'rxjs/operators';
import { NavItem } from 'src/app/core/data/model/nav-bar.model';

import { NavBarService } from '../nav-bar.service';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.scss'],
  animations: [
    trigger(
      'indicatorRotate', [
        state('collapsed', style({transform: 'rotate(0deg)'})),
        state('expanded', style({transform: 'rotate(180deg)'})),
        transition('expanded <=> collapsed',
          animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
        ),
      ]
    ),
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class NavListItemComponent implements AfterViewInit {

  constructor(
    private navBarService: NavBarService,
    public router: Router,
  ) { }

  currentUrl = this.navBarService.currentUrl.pipe(
    tap((data) => this.expanded = data.includes(this.item?.Route || null)),
  );

  active = false;
  expanded = false;
  @Input() depth = 0;
  @Input() item: NavItem;

  ngAfterViewInit(): void {
    this.expanded = this.router.isActive(this.item.Route, false);
  }

  onItemSelected(item: NavItem): void {
    if (!item.Children || !item.Children.length) {
      this.router.navigate([item.Route]);
      this.navBarService.IsOpen.next(false);
    } else if (item.Children && item.Children.length) {
      this.expanded = !this.expanded;
    }
  }

}
