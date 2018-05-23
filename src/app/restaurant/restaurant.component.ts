import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../servives/restaurant.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  listeRestaurants:any;
  constructor(public restaurantservice:RestaurantService) { }

  ngOnInit() {
    this.restaurantservice.getRestaurants().subscribe((res:Response) => this.listeRestaurants = res.json());
  }

}
