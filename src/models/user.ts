import { Location } from './index';

export class User {
  constructor(
    public name: string,
    public email: string,
    public image?: string,
    public location?: Location,
  ) {}
}
