import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'

import { Foodtruck, Location } from '../models'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'


@Injectable()
export class FoodtruckProvider {

  constructor(public db: AngularFireDatabase) {}

  getFoodtrucks(yourLocation: Location) {
    const foodtrucks: Observable<any[]> = this.db.list('foodtrucks').valueChanges()

    const result = foodtrucks.pipe(
      map(foodtrucks =>
        foodtrucks.map(foodtruck => new Foodtruck(
          foodtruck.name,
          foodtruck.owner,
          foodtruck.isOpen == 'true',
          foodtruck.speciality,
          foodtruck.logo,
          new Location(
            Number(foodtruck.latitude),
            Number(foodtruck.longitude),
            this.getDistanceOfFoodtruck(new Location(foodtruck.latitude, foodtruck.longitude), yourLocation)
          ),
          foodtruck.phone,
          foodtruck.email,
          foodtruck.facebook,
          foodtruck.instagram)
        )
      )
    )

    return result
  }

  getDistanceOfFoodtruck(foodtruck: Location, yourLocation: Location) {
    const R = 6371 // Raio da terra
    const distanceLat = this.deg2rad(yourLocation.latitude - foodtruck.latitude)
    const distanceLon = this.deg2rad(yourLocation.longitude - foodtruck.longitude);
    const a =
      Math.sin(distanceLat / 2) * Math.sin(distanceLat / 2) +
      Math.cos(this.deg2rad(foodtruck.latitude)) * Math.cos(this.deg2rad(yourLocation.latitude)) *
      Math.sin(distanceLon / 2) * Math.sin(distanceLon / 2)
      ;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Distance in km
    return Math.round(distance);
  }

  private deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

}
