import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { Foodtruck } from '../../models';

@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

  foodtruck: Foodtruck
  latitude: number
  longitude: number

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.foodtruck = this.navParams.get('foodtruck')
    this.latitude = this.foodtruck.location.latitude
    this.longitude = this.foodtruck.location.longitude
  }

  ionViewDidLoad() {

  }

}
