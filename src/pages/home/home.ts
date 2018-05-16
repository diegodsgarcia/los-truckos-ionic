import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Foodtruck, User, Location } from '../../models/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private foodtrucks: Foodtruck[];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    const location = new Location(1, 1, '7º Andar, Av. Paulista, 1106 - Bela Vista, São Paulo - SP, 01311-000');
    this.foodtrucks = [
      new Foodtruck(new Date().getTime(), "Lorem", "lorem@gmail.com", "img.png", location),
      new Foodtruck(new Date().getTime(), "Ipsum", "ipsum@gmail.com", "img.png", location),
      new Foodtruck(new Date().getTime(), "Dolor", "dolor@gmail.com", "img.png", location),
    ]
  }

}
