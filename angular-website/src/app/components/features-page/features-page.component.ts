import { Component, OnInit } from '@angular/core';
import { Cards } from '../../lists/cards/cards';
import { Card } from '../../lists/cards/card';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.css']
})
export class FeaturesPageComponent implements OnInit {

  imgUrl: string = 'http://placeimg.com/640/360/any';
  cards: Array<Card> = Cards;

  constructor() { }

  ngOnInit() {
    console.log(this.cards)
  }

}
