import { SPModel } from './_model';

export class FAQ extends SPModel {
  constructor(args: Partial<FAQ>) {
    super();
    Object.assign(this, args);
  }
  Category = '';
  Question = '';
  Answer = '';
}
