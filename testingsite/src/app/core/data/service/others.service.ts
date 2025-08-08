import { Injectable } from '@angular/core';
import { sp } from '@pnp/sp';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/items';


import { SPList } from 'src/constant/list.constant';
import { Announcement, FeaturedCurriculum } from '../model/others.model';

@Injectable({
  providedIn: 'root'
})
export class OthersService {

  async getAnnouncements() {
    const tempList = await sp.web.lists.getByTitle(SPList.ANNOUNCEMENT).items();
    return tempList.map(e => {
      const { Id, Title, Description, Link, BackgroundImage } = e;
      return new Announcement({
        Id,
        Title,
        Description,
        Link,
        BackgroundImageUrl: BackgroundImage,
      });
    });
  }

  async getFeaturedCurriculum() {
    const tempList = await sp.web.lists.getByTitle(SPList.FEATURED_CURRICULUM).items();
    return tempList.map(e => {
      const { Id, Title, CurriculumId } = e;
      return  new FeaturedCurriculum({
        Id,
        Title,
        CurriculumId,
      });
    });
  }

}
