import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'

// Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { firebaseConfig } from '../environments/environment'

// Pages
import { MyApp } from './app.component'
import { TabsPage } from '../pages/tabs/tabs'
import { LoginPage } from '../pages/login/login'
import { MapPage } from '../pages/map/map'
import { SettingsPage } from '../pages/settings/settings'

// Providers
import { UserProvider } from '../providers/user'

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    TabsPage,
    MapPage,
    SettingsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    MapPage,
    SettingsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
  ]
})

export class AppModule {}
