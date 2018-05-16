export class User {
  constructor(
    public id: number,
    public user: string,
    public email: string,
    public image: string,
    public location: Location,
  ) {}
}
