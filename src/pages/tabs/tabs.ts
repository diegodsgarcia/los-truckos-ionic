import { Component } from '@angular/core'
import { Keyboard } from '@ionic-native/keyboard'

import { MapPage } from '../map/map'
import { SettingsPage } from '../settings/settings'

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabMap: any = MapPage
  tabSettings: any = SettingsPage
  showTabs: boolean = true

  constructor(private keyboard: Keyboard) {}

  ionViewDidLoad() {
    this.keyboard.onKeyboardShow().subscribe((keyboard) => this.showTabs = false)
    this.keyboard.onKeyboardHide().subscribe((keyboard) => this.showTabs = true)
  }

}
