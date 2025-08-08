import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AccountService } from './core/data/service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private titleService: Title,
  ) {}

  PageIsLoading = true;

  ngOnInit() {
    this.titleService.setTitle(environment.AppTitle);
    this.initialLoad();
  }

  async initialLoad() {
    this.PageIsLoading = true;
    await this.accountService.initializeProfile();
    this.PageIsLoading = false;
  }
}
