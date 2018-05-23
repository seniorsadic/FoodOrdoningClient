import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../servives/restaurant.services';
import { Response } from '@angular/http';
import swal from 'sweetalert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  listeRestaurants:any;
  constructor(public restaurantservice:RestaurantService,public router:Router) { }

  ngOnInit() {
    this.chargement();
  }

  chargement(){
    this.restaurantservice.getRestaurants().subscribe((res:Response) => this.listeRestaurants = res.json());
  }

  updateRestaurant(id:number){
    this.router.navigate(['/modifierrestaurant',id]);
  }

  deleteRestaurant(id:number){
    var resultat;
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé!",
      icon:"warning"
    })
    .then((willDelete) => {
      if (willDelete) {
        this.restaurantservice.deleteRestaurant(id).subscribe((res:Response) => resultat = res.json());
        console.log(resultat);
          swal("Poof! Restaurant supprimé !", {
            icon: "success",
          });
          this.chargement();      
      } else {
        swal("Restaurant non supprimé !");
      }
    });
  }

}
