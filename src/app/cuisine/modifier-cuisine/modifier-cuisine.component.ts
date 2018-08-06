import { Component, OnInit } from '@angular/core';
import { Cuisine } from '../../../model/model.cuisine';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { CuisineService } from '../../../servives/cuisine.services';

@Component({
  selector: 'app-modifier-cuisine',
  templateUrl: './modifier-cuisine.component.html',
  styleUrls: ['./modifier-cuisine.component.css']
})
export class ModifierCuisineComponent implements OnInit {

  idCuisine:number;
  cuisine:Cuisine;

  constructor(public activatedRoute:ActivatedRoute,public cuisineService:CuisineService,public router:Router) {
    this.idCuisine=activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
      this.cuisineService.getCuisineById(this.idCuisine).subscribe( res => this.cuisine = res.json());
  }

  modifier(){
    this.cuisineService.updateCuisine(this.cuisine).subscribe(res => this.cuisine = res.json());
    console.log(this.cuisine);
    this.router.navigate(['/listeCuisines', this.cuisine.id_resto.id_resto]);
  }

  annuler(){
    this.router.navigate(['/listeCuisines', this.cuisine.id_resto.id_resto]);
  }

}
