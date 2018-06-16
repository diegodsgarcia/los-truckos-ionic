import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation'
import { AngularFireAuth } from 'angularfire2/auth'

import { Location, User } from '../models'


@Injectable()
export class UserProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private geolocation: Geolocation,
  ) {}

  get user() {
    return new User(
      this.afAuth.auth.currentUser.displayName,
      this.afAuth.auth.currentUser.email,
      this.afAuth.auth.currentUser.photoURL,
    )
  }

   getLocation(): Promise<Location> {
     return new Promise(resolve => {
      this.geolocation.getCurrentPosition().then(pos => {
        resolve(new Location(pos.coords.latitude, pos.coords.longitude))
      })
     })
    // const geolocation = await this.geolocation.getCurrentPosition()
    // const location = await this.getReverseGeocode(geolocation.coords.latitude, geolocation.coords.longitude)
    // return location
  }

  // getReverseGeocode(latitude, longitude) {
  //   return new Promise((resolve, reject) => {
  //     this.nativeGeocoder.reverseGeocode(latitude, longitude)
  //       .then(result => new Location(latitude, longitude, JSON.stringify(result)))
  //       .catch(error => new Location(latitude, longitude, error))
  //   })

  // }

  signOut() {
    this.afAuth.auth.signOut()
  }
}
