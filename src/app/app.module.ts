import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

// Ionic
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { Geolocation } from '@ionic-native/geolocation'

// Firebase
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { firebaseConfig, mapsConfig } from '../environments/environment'

// Maps
import { AgmCoreModule } from '@agm/core'

// Pages
import { DescriptionPage } from '../pages/description/description'
import { MyApp } from './app.component'
import { TabsPage } from '../pages/tabs/tabs'
import { LoginPage } from '../pages/login/login'
import { MapPage } from '../pages/map/map'
import { SettingsPage } from '../pages/settings/settings'

// Providers
import { UserProvider } from '../providers'
import { FoodtruckProvider } from '../providers'



@NgModule({
  declarations: [
    DescriptionPage,
    LoginPage,
    MapPage,
    MyApp,
    TabsPage,
    SettingsPage,
  ],
  imports: [
    AgmCoreModule.forRoot(mapsConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    DescriptionPage,
    LoginPage,
    MapPage,
    MyApp,
    TabsPage,
    SettingsPage,
  ],
  providers: [
    FoodtruckProvider,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
  ]
})

export class AppModule {}
