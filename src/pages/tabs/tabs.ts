import { Component } from '@angular/core'

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

  constructor() {}
}
