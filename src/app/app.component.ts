import { Component } from '@angular/core'
import { Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

import { AngularFireAuth } from 'angularfire2/auth'

import { TabsPage } from '../pages/tabs/tabs'
import { LoginPage } from '../pages/login/login'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any

  constructor(
    private afAuth: AngularFireAuth,
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ) {

    platform.ready().then(() => {
      statusBar.styleDefault()
      splashScreen.hide()
      this.checkIfIsAuthenticate()
    });

  }

  checkIfIsAuthenticate() {
    this.afAuth.authState.subscribe((isAuth) => {
      if(isAuth) {
        this.rootPage = TabsPage
      } else {
        this.rootPage = LoginPage
      }
    })
  }
}

