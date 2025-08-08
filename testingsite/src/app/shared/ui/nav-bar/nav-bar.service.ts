import { Injectable } from '@angular/core';
import { ResolveEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { NavItem } from 'src/app/core/data/model/nav-bar.model';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  constructor(
    private router: Router,
  ) {}

  IsOpen = new BehaviorSubject<boolean>(true);
  currentUrl = this.router.events.pipe(
    filter(event => event instanceof ResolveEnd),
    map((event: ResolveEnd) => event.urlAfterRedirects),
    startWith(''),
  );

  open() { this.IsOpen.next(true); }
  close() { this.IsOpen.next(false); }
  toggle() { this.IsOpen.next(!this.IsOpen.value); }

}
