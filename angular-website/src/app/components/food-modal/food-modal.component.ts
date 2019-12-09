import { Component, OnInit, Input } from '@angular/core';
import { Favorites } from './../lists/favorites-modal/favorites-modal';

@Component({
  selector: 'app-food-modal',
  templateUrl: './food-modal.component.html',
  styleUrls: ['./food-modal.component.css']
})
export class FoodModalComponent implements OnInit {

  @Input() favoritesData : Favorites[];
  @Input() ID = Number;

  constructor() { }

  ngOnInit() {
    console.log(this.ID)
  }

}
