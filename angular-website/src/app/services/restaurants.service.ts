import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common//http';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  // private url: string = 'http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json'

  private url : string = 'assets/restaurants-api/restaurants-api.json';

  constructor(private http: HttpClient) { }

  getRestaurants(){
    return this.http.get(this.url);
  }

}
