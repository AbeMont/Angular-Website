import { Component, OnInit } from '@angular/core';
import { Card } from '../../lists/cards/card';
import { CardsService } from './../../services/cards.service';
import { RestaurantsService } from './../../services/restaurants.service';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.css']
})
export class FeaturesPageComponent implements OnInit {

  //imgUrl: string = 'http://placeimg.com/640/360/any';
  //cards: Card[];
  restaurants;

  constructor(private restaurantsService: RestaurantsService) { }

  // getCards(){
  //   this.cards = this.cardService.getCards()
  // }

  ngOnInit() {
    // this.getCards();

    this.test();

  }

  test(){
    this.restaurantsService.getRestaurants()
      .subscribe((data:any) => {
        console.log(data.restaurants)
        this.restaurants = data.restaurants;
    });
    console.log(this.restaurants)
  }


}
