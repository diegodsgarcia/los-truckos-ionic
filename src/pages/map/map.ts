import { Component, ElementRef } from '@angular/core'
import { NavController } from 'ionic-angular'

import { FoodtruckProvider, UserProvider } from '../../providers'
import { Foodtruck, Location } from '../../models'
import { DescriptionPage } from '../description/description'

import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  foodtrucks: Observable<Foodtruck[]>
  currentLocation: Promise<Location>
  list: HTMLElement
  searchbar: HTMLElement
  tabbar: HTMLElement
  scrollContent: HTMLElement
  searchValue: string

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
    this.tabbar = document.querySelector('.tabbar')
    this.scrollContent = document.querySelector('.scroll-content')
  }

  openList() {
    if (!this.list.classList.contains('list--active')) {
      this.list.classList.add('list--active')
      this.searchbar.classList.add('searchbar--active')
      this.tabbar.classList.add('tabbar-hidden')
      this.scrollContent.classList.add('scroll-content--full')
    }
  }

  closeList() {
    if (this.list.classList.contains('list--active')) {
      this.list.classList.remove('list--active')
      this.searchbar.classList.remove('searchbar--active')
      this.tabbar.classList.remove('tabbar-hidden')
      this.scrollContent.classList.remove('scroll-content--full')
    }
  }

  onChoseLocation(event) {
  }

  openDescription(foodtruck) {
    this.navCtrl.push(DescriptionPage, { foodtruck })
  }

  searchFoodtrucks() {
    if (this.searchValue) {
      this.foodtrucks = this.foodtrucks.pipe(
        map(foodtrucks => {
          return foodtrucks.filter(foodtruck => {
            return foodtruck.name.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
          })
        })
      )

    } else {
      this.currentLocation.then(location => {
        this.foodtrucks = this.foodtruckProvider.getFoodtrucks(location)
      })
    }
  }
}
