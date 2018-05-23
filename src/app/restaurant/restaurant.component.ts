import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../servives/restaurant.services';
import { Response } from '@angular/http';
import swal from 'sweetalert';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  listeRestaurants:any;
  constructor(public restaurantservice:RestaurantService) { }

  ngOnInit() {
    this.chargement();
  }

  chargement(){
    this.restaurantservice.getRestaurants().subscribe((res:Response) => this.listeRestaurants = res.json());
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
