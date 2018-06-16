import { Injectable } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Geolocation } from '@ionic-native/geolocation'
import { AngularFireAuth } from 'angularfire2/auth'

import { GooglePlus } from '@ionic-native/google-plus'
import { firebaseConfig } from '../environments/environment'
import * as firebase from 'firebase'

import { Location, User } from '../models'


@Injectable()
export class UserProvider {

  constructor(
    private afAuth: AngularFireAuth,
    private googlePlus: GooglePlus,
    private geolocation: Geolocation,
    private platform: Platform
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
  }

  signInWithGoogle() {
    if (this.platform.is('cordova')) {
      return this.googlePlus.login({
        'webClientId': firebaseConfig.webClientId
      })
      .then(result => {
        console.log(result)
        return this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(result.accessToken))
      })
    } else {
      return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    }
  }

  signOut() {
    this.afAuth.auth.signOut()
    this.googlePlus.logout()
  }
}
