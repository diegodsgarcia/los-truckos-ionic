import { Component } from '@angular/core'
import { NavParams } from 'ionic-angular'
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator'
import { Foodtruck, Location } from '../../models'
import { UserProvider } from '../../providers'


@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {

  foodtruck: Foodtruck
  latitude: number
  longitude: number
  currentLocation: Location

  constructor(
      private launchNavigator: LaunchNavigator,
      private navParams: NavParams,
      private userProvier: UserProvider
    ) {
    this.foodtruck = this.navParams.get('foodtruck')
    this.latitude = this.foodtruck.location.latitude
    this.longitude = this.foodtruck.location.longitude
  }

  ionViewDidLoad() {
    this.userProvier.getLocation().then(location => this.currentLocation = location)
  }

  makeRoute() {
    const options: LaunchNavigatorOptions = {
      start: [this.currentLocation.latitude, this.currentLocation.longitude],
    }

    this.launchNavigator.navigate([this.latitude, this.longitude], options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      )
  }
}
