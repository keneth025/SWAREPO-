import { Injectable } from '@angular/core';
import { sp } from '@pnp/sp';
import '@pnp/sp/sputilities';
import { environment } from 'src/environments/environment';
import { UserFeedback } from '../model/user-feedback.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(
    private userService: UserService,
  ) {}
  async sendFeedbackNotification(userFeedback: UserFeedback) {
    console.log('Resolving Support Mail');
    const resMail = await this.userService.resolveEmail(environment.SupportMail);
    await this.userService.ensureUser(resMail.Key);
    console.log('Sending Email');
    const res  = await sp.utility.sendEmail({
      From: environment.SupportMail,
      Subject: '[OneCap] User Feedback Notification',
      To: [environment.SupportMail],
      Body: `
      <style>
        * { font-family: "Open Sans", sans-serif; }
        p {
          font-size: 12pt;
        }
      </style>
      <div> Hello <b>${ environment.SupportName }</b> </div>
      <br/>
      <div>
        A new user feeback has been submitted by: ${userFeedback?.User?.Title}
      </div>
      <br/>
      <div>
        <b><u> Details: </u></b> <br/>
        <b>Pages Affected:</b> ${userFeedback?.PageReported}
        <b>Feedback:</b> <br/>
        <br/>
        <div>
          ${userFeedback?.Feedback}
        </div>
      </div>
      `
    });
  }
}
