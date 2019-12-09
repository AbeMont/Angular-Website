import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './../../services/restaurants.service';
import { Favorites } from './../lists/favorites-modal/favorites-modal';


@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.css']
})
export class FeaturesPageComponent implements OnInit {

  restaurants: string = '';
  favoritesModal: Favorites[];
  modalID : any = "AmodalID";
  

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getModalInfo(modalData){
    this.favoritesModal = modalData;
    console.log(this.favoritesModal)
  }

  getRestaurants(){
    this.restaurantsService.getRestaurants()
      .subscribe((data:any) => {
        console.log(data)
        this.restaurants = data;
    });
  }


}
