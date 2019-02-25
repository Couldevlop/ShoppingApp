import { Category } from './../../model/interface-category';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Icon } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any;
  categories: Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.categories = [
      {
        title: "Vetements",
        description: "les habits importés et de très bonne qualité",
        icon: "shirt" 
      },

      {
        title: "Electronique",
        description: "les meilleurs equipements",
        icon: "phone-portrait" 
      },

      {
        title: "Mode et accessoire",
        description: "Tout pour la mode",
        icon: "bowtie" 
      },

      {
        title: "Chaussures",
        description: "les plus belle chaussures jamais vues nul part ailleurs",
        icon: "archive" 
      }
    ]
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
