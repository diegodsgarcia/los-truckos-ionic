import { Component } from '@angular/core'
import { UserProvider } from '../../providers'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  constructor(
    private userProvider: UserProvider
  ) {}

  login() {
    this.userProvider.signInWithGoogle()
  }

}
