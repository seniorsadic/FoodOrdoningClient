import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../../servives/restaurant.services';
import { Restaurant } from '../../../model/model.restaurant';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import swal from 'sweetalert';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  restaurant:Restaurant;
  constructor(public restaurantservice:RestaurantService,public router:Router) { }

  ngOnInit() {
    this.restaurant=new Restaurant();
  }

  enregistrer(){
    this.restaurant.code="RESTO"+Math.floor(Math.random()*500000000);
    this.restaurantservice.saveRestaurant(this.restaurant).subscribe((res:Response) => this.restaurant = res.json());
    console.log(this.restaurant);
    this.router.navigate(['/restaurants']);

  }

  annuler(){
    this.router.navigate(['/restaurants']);
  }
}
