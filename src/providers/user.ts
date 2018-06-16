import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation'
import { AngularFireAuth } from 'angularfire2/auth'

import { Location, User } from '../models'


@Injectable()
export class UserProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private geolocation: Geolocation
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
      this.geolocation.getCurrentPosition().then((pos) => {
        resolve(new Location(pos.coords.latitude, pos.coords.longitude, '1'))
      })
    })
  }

  signOut() {
    this.afAuth.auth.signOut()
  }
}
