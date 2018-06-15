import { Location } from './index'

export class Foodtruck {
  constructor(
    public name: string,
    public owner: string,
    public isOpen: boolean,
    public speciality: string,
    public logo: string,
    public location: Location,
    public phone?: string,
    public email?: string,
    public facebook?: string,
    public instagram?: string,
  ) {}

  get distance() {
    return 1.2
  }
}
