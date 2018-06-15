import { Component, ElementRef } from '@angular/core'
import { NavController } from 'ionic-angular'
import { Foodtruck, Location } from '../../models/index'
import { DescriptionPage } from '../description/description';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {
  foodtrucks: Foodtruck[]
  latitude: number = 51.678418
  longitude: number = 7.809007
  list: HTMLElement
  searchbar: HTMLElement

  constructor(public navCtrl: NavController, public elementRef: ElementRef) {

    const location = new Location(1, 1, '7º Andar, Av. Paulista, 1106 - Bela Vista, São Paulo - SP, 01311-000')
    this.foodtrucks = [new Foodtruck(
      "Name",
      "Owner",
      false,
      "Speciality",
      "Logo",
      "Phone",
      "Email",
      "Facebook",
      "Instagram",
      location
    )];
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
    this.latitude = event.coords.lat
    this.longitude = event.coords.lng
  }

  openDescription(foodtruck) {
    this.navCtrl.push(DescriptionPage, { foodtruck })
  }

}
