import { Component } from '@angular/core'
import { Platform, NavController } from 'ionic-angular'
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(
    private afAuth: AngularFireAuth,
    public platform: Platform,
    public navCtrl: NavController,
  ) {}

  ionViewDidLoad() {

  }

  login() {
    this.signInWithGoogle()
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    if (this.platform.is('cordova')) {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => this.afAuth.auth.getRedirectResult())

    } else {
      return this.afAuth.auth.signInWithPopup(provider)

    }
  }

}
