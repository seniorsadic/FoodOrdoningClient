import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../../servives/restaurant.services';
import { Restaurant } from '../../../model/model.restaurant';
import { Response } from '@angular/http';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  idRestaurant:number;
  restaurant:Restaurant;

  constructor(public activatedRoute:ActivatedRoute,public restaurantservice:RestaurantService,public router:Router) {
    this.idRestaurant=activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
      this.restaurantservice.getRestaurantById(this.idRestaurant).subscribe((res:Response) => this.restaurant = res.json());
  }

  modifier(){
    this.restaurantservice.updateRestaurant(this.restaurant).subscribe((res:Response) => this.restaurant = res.json());
    console.log(this.restaurant);
    this.router.navigate(['/restaurants']);
  }

}
