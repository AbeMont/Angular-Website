import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RestaurantsService } from './../../services/restaurants.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: any;
  restaurants: any;

  constructor(
    private restaruantsService: RestaurantsService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit() {
    this.getRestaurants()
  }

  getRestaurants() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaruantsService.getRestaurants()
      .subscribe((data: any) => {
        console.log(data)
        this.restaurant = data.filter(restaurant => restaurant.id === id);
        console.log(this.restaurant)
        //this.restaurants = data;
      });
      console.log(this.restaurants)
  }

  goBack(): void {
    this.location.back();
  }

}
