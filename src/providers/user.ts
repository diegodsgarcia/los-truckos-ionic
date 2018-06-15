import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Geolocation } from '@ionic-native/geolocation'

import { Location } from '../models'


@Injectable()
export class UserProvider {

  constructor(
    public http: HttpClient,
    public geolocation: Geolocation
  ) {

  }

  getLocation() {
    return new Promise((resolve, reject) => {
      this.geolocation.getCurrentPosition().then((pos) => {
        resolve(new Location(pos.coords.latitude, pos.coords.longitude, '1'))
      })
    })
  }

}
