import { Injectable } from '@angular/core';
import { SPList } from 'src/constant/list.constant';
import { FAQ } from '../model/faq.model';
import { SPModelService } from './_service';

@Injectable({
  providedIn: 'root'
})
export class FAQService extends SPModelService<FAQ> {

  get query() {
    return this.sp.web.lists.getByTitle(SPList.FAQ).items;
  }

  toObject(data) {
    const {
      Id,
      Title,
      Category,
      Question,
      Answer,
    } = data;
    return new FAQ({
      Id,
      Title,
      Category,
      Question,
      Answer,
    });
  }
}
