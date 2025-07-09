import { SPModel } from './_model';

export class Announcement extends SPModel {

  constructor(args: Partial<Announcement>) {
    super();
    Object.assign(this, args);
  }

  Description = '';
  Link = '';
  BackgroundImageUrl = '';
}

export class FeaturedCurriculum extends SPModel {
  constructor(args: Partial<FeaturedCurriculum>) {
    super();
    Object.assign(this, args);
  }
  CurriculumId = -1;
}

