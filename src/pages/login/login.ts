import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  ionViewDidLoad() {

  }

  login() {
    // this.signInWithGoogle().then((datas) => {
    //   console.log(datas);
    // }).catch((error) => {
    //   console.log(error);
    // })
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    if (!(<any>window).cordova) {
      return this.afAuth.auth.signInWithPopup(provider);
    } else {
      return this.afAuth.auth.signInWithRedirect(provider)
        .then(() => this.afAuth.auth.getRedirectResult());
    }
  }

}
