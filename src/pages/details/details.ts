import { Product } from './../../model/interface-product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import {Storage} from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  productDetails: Product[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public event: Events, 
  public storage: Storage) {
    this.productDetails = this.navParams.get('data');
    this.event.subscribe('star-rating:changed, (starRating) => {console.log("voici la note choisie" note)}');

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  addToCart(): void{
    this.storage.set("product", "test");
  }

  
}
