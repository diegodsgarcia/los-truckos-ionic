import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { User } from '../../models'

import { UserProvider } from '../../providers/user'
import { AngularFireAuth } from 'angularfire2/auth'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private user: User

  constructor(
    private afAuth: AngularFireAuth,
    private userProvider: UserProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {}

  ionViewDidLoad() {
    this.user = this.userProvider.user

    this.userProvider.getLocation().then(location => {

    })
  }

  logout() {
    this.afAuth.auth.signOut()
  }

}
