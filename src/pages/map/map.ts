import { Component, ElementRef } from '@angular/core'
import { NavController } from 'ionic-angular'
import { AngularFireDatabase } from 'angularfire2/database'

import { Foodtruck, Location } from '../../models/index'
import { DescriptionPage } from '../description/description'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  foodtrucks: Observable<Foodtruck[]>
  latitude: number = 51.678418
  longitude: number = 7.809007
  list: HTMLElement
  searchbar: HTMLElement

  constructor(
    private db: AngularFireDatabase,
    public navCtrl: NavController,
    public elementRef: ElementRef) {

    this.foodtrucks = this.getFoodtrucks()
  }

  private getFoodtrucks() {
    const location = new Location(51.678418, 7.809007, '7º Andar, Av. Paulista, 1106 - Bela Vista, São Paulo - SP, 01311-000')

    const datas: Observable<any[]> = this.db.list('foodtrucks').valueChanges()

    datas.pipe(
      map(foodtrucks =>
        foodtrucks.map(foodtruck => new Foodtruck(
          foodtruck.name,
          foodtruck.owner,
          foodtruck.isOpen,
          foodtruck.speciality,
          foodtruck.logo,
          location,
          foodtruck.phone,
          foodtruck.email,
          foodtruck.facebook,
          foodtruck.instagram)
        )
      )
    )

    return datas

  }

  ionViewDidLoad() {
    this.list = this.elementRef.nativeElement.querySelector('.list')
    this.searchbar = this.elementRef.nativeElement.querySelector('.searchbar')
  }

  openList() {
    if (!this.list.classList.contains('list--active')) {
      this.list.classList.add('list--active')
      this.searchbar.classList.add('searchbar--active')
    }
  }

  closeList() {
    if (this.list.classList.contains('list--active')) {
      this.list.classList.remove('list--active')
      this.searchbar.classList.remove('searchbar--active')
    }
  }

  onChoseLocation(event) {
  }

  openDescription(foodtruck) {
    this.navCtrl.push(DescriptionPage, { foodtruck })
  }

}
