import { switchMap, tap, map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {

  previousUrl: Observable<any>;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.previousUrl = this.route.queryParamMap.pipe(
      map(e => e.get('url')),
      tap(e => console.log('url', e)),
    );
  }

}
