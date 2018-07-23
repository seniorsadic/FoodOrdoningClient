import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../../../model/model.cuisine';
import { CuisineService } from '../../../servives/cuisine.services';
import { RestaurantService } from '../../../servives/restaurant.services';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterCuiniseComponent implements OnInit {

  cuisine:Cuisine;
  idResto: number;

  constructor(public cuisineservice:CuisineService, public restoservice:CuisineService, public activatedRoute:ActivatedRoute,
  public router:Router) {this.idResto=activatedRoute.snapshot.params['id']; }

  ngOnInit() {
    this.cuisine=new Cuisine();   
  }

  save(){
    this.cuisine.id_resto = this.idResto;
    this.cuisineservice.saveCuisine(this.cuisine).subscribe((res:Response) => this.cuisine = res.json());
    console.log(this.cuisine);
    this.router.navigate(['/listeCuisines/'+this.idResto]);
  }


}
