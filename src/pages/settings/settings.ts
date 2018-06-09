import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'
import { User } from '../../models/user'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private user: User
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User(
      'Diego Garcia',
      'diego.ds.garcia@gmail.com', 'https://ionicframework.com/img/meta/ionic-framework-og.png'
    )
  }

  ionViewDidLoad() {

  }

}
