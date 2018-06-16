export class Location {
  constructor(
    public latitude: number,
    public longitude: number,
    public distance?: number,
    public address?: string,
  ) {}
}
