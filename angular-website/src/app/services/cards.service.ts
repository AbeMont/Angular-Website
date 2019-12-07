import { Injectable } from '@angular/core';
import { Card } from './../lists/cards/card';
import { Cards } from './../lists/cards/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor() { }

  getCards(): Card[]{
    return Cards;
  }

}
