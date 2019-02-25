import { DetailsPage } from './../details/details';
import { Product } from './../../model/interface-product';
import { Component } from '@angular/core';
import { NavController, AlertController, AlertOptions,ActionSheetController, ActionSheet, ActionSheetOptions } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  articles: Product[];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
  public actionSheetCtrl: ActionSheetController) {

      this.articles =[
        {
          id: "1",
          title: "jacket",
          description: "adfabilitate confisus cum eadem postridie Quam ob rem cave Catoni anteponas ne istum quidem Post haec indumentum regale quaerebatur et Nihil morati post haec militares avidi saepe Nam quibusdam, quos audio sapientes habitos in Intellectum est enim mihi quidem in multis, et",
          price: "100",
          categorie: "vetement",
          createDate: new Date(),
          state: "neuf",
          city: "cote d'ivoire",
          averageStar:3,
          availability:{
            available: false,
            type: "livraison",
            feed: 100
          },
          picture:[
            "assets/imgs/product1/J1.jpg",
            "assets/imgs/product1/J2.jpg",
            "assets/imgs/product1/J3.jpg",
            "assets/imgs/product1/J4.jpg",
            "assets/imgs/product1/J5.jpg",
            "assets/imgs/product1/J6.jpg",
            "assets/imgs/product1/J7.jpg",
            "assets/imgs/product1/J8.jpg",
            "assets/imgs/product1/J9.jpg",
            "assets/imgs/product1/J10.jpg"
          ]

        },
        {
        id: "2",
        title: "jean",
        description: "adfabilitate confisus cum eadem postridie Quam ob rem cave Catoni anteponas ne istum quidem Post haec indumentum regale quaerebatur et Nihil morati post haec militares avidi saepe Nam quibusdam, quos audio sapientes habitos in Intellectum est enim mihi quidem in multis, et",
        price: "600",
        categorie: "vetement",
        createDate: new Date(),
        state: "Ocasion",
        city: "Benin",
        averageStar:3,
        availability:{
          available: true,
          type: "livraison",
          feed: 10
        },
        picture:[
          "assets/imgs/product2/jean1.jpg",
          "assets/imgs/product2/jean2.jpg",
          "assets/imgs/product2/jean3.jpg",
          "assets/imgs/product2/jean4.jpg",
          "assets/imgs/product2/jean5.jpg",
          "assets/imgs/product2/jean6.jpg",
          "assets/imgs/product2/jean7.jpg",
          "assets/imgs/product2/jean8.jpg"  
        ]

      },
      {
      id: "3",
      title: "Costume",
      description: "adfabilitate confisus cum eadem postridie Quam ob rem cave Catoni anteponas ne istum quidem Post haec indumentum regale quaerebatur et Nihil morati post haec militares avidi saepe Nam quibusdam, quos audio sapientes habitos in Intellectum est enim mihi quidem in multis, et",
      price: "800",
      categorie: "vetement",
      createDate: new Date(),
      state: "neuf",
      city: "cote d'ivoire",
      averageStar:5,
      availability:{
        available: false,
        type: "livraison",
        feed: 100
      },
      picture:[
        "assets/imgs/product3/V1.jpg",
        "assets/imgs/product3/V2.jpg",
        "assets/imgs/product3/V3.jpg",
        "assets/imgs/product3/V4.jpg",
        "assets/imgs/product3/V5.jpg",
        "assets/imgs/product3/V6.jpg",
        "assets/imgs/product3/V7.jpg",
        "assets/imgs/product3/V8.jpg"
      ]

    },
    {
    id: "4",
    title: "Enfant",
    description: "adfabilitate confisus cum eadem postridie Quam ob rem cave Catoni anteponas ne istum quidem Post haec indumentum regale quaerebatur et Nihil morati post haec militares avidi saepe Nam quibusdam, quos audio sapientes habitos in Intellectum est enim mihi quidem in multis, et",
    price: "100",
    categorie: "vetement",
    createDate: new Date(),
    state: "neuf",
    city: "cote d'ivoire",
    averageStar:4,
    availability:{
      available: true,
      type: "livraison",
      feed: 100
    },
    picture:[
      "assets/imgs/product4/E1.jpg",
      "assets/imgs/product4/E2.jpg",
      "assets/imgs/product4/E3.jpg",
      "assets/imgs/product4/E4.jpg",
      "assets/imgs/product4/E5.jpg",
      "assets/imgs/product4/E6.jpg",
      "assets/imgs/product4/E7.jpg",
      "assets/imgs/product4/E8.jpg",
      "assets/imgs/product4/E9.jpg"
    ]

  },
  {
  id: "5",
  title: "Sac à main",
  description: "adfabilitate confisus cum eadem postridie Quam ob rem cave Catoni anteponas ne istum quidem Post haec indumentum regale quaerebatur et Nihil morati post haec militares avidi saepe Nam quibusdam, quos audio sapientes habitos in Intellectum est enim mihi quidem in multis, et",
  price: "200",
  categorie: "vetement",
  createDate: new Date(),
  state: "neuf",
  city: "cote d'ivoire",
  averageStar:5,
  availability:{
    available: false,
    type: "livraison",
    feed: 80
  },
  picture:[
    "assets/imgs/product5/S1.jpg",
    "assets/imgs/product5/S2.jpg",
    "assets/imgs/product5/S3.jpg",
    "assets/imgs/product5/S4.jpg",
    "assets/imgs/product5/S5.jpg",
    "assets/imgs/product5/S6.jpg",
    "assets/imgs/product5/S7.jpg",
    "assets/imgs/product5/S8.jpg",
    "assets/imgs/product5/S9.jpg",
    "assets/imgs/product5/S10.jpg"
  ]

}
      ]
  }

  showDetails(article: Product){
    this.navCtrl.push(DetailsPage, {data: article});
  }
}
