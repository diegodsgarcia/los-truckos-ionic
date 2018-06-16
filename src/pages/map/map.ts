import { Component, ElementRef } from '@angular/core'
import { NavController } from 'ionic-angular'

import { FoodtruckProvider, UserProvider } from '../../providers'
import { Foodtruck, Location } from '../../models'
import { DescriptionPage } from '../description/description'

import { Observable } from 'rxjs'

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  foodtrucks: Observable<Foodtruck[]>
  currentLocation: Promise<Location>
  list: HTMLElement
  searchbar: HTMLElement

  constructor(
    private foodtruckProvider: FoodtruckProvider,
    private userProvider: UserProvider,
    public navCtrl: NavController,
    public elementRef: ElementRef) {

    this.currentLocation = this.userProvider.getLocation()

    this.currentLocation.then(location => {
      this.foodtrucks = this.foodtruckProvider.getFoodtrucks(location)
    })
  }

  ionViewDidLoad() {
    this.list = this.elementRef.nativeElement.querySelector('.list')
    this.searchbar = this.elementRef.nativeElement.querySelector('.searchbar')
  }

  // calculateLocation(foodtruck: Foodtruck) {
  //   return new Promise(resolve => {
  //     this.userProvider.getLocation().then(location => {
  //       const calculate = this.foodtruckProvider.getDistanceOfFoodtruck(foodtruck, location)
  //       resolve(calculate)
  //     })
  //   })
  // }

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
    console.log(foodtruck)
    this.navCtrl.push(DescriptionPage, { foodtruck })
  }

}
