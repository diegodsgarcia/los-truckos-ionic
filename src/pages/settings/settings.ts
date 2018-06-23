import { Component } from '@angular/core'
import { User } from '../../models'

import { UserProvider } from '../../providers'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  user: User

  constructor(
    private userProvider: UserProvider
  ) {}

  ionViewDidLoad() {
    this.user = this.userProvider.user
  }

  logout() {
    this.userProvider.signOut()
  }

}
