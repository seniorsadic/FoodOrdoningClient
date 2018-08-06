import { Component, OnInit } from '@angular/core';
import { CuisineService } from '../../servives/cuisine.services';
import { Response } from '@angular/http';
import swal from 'sweetalert';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cuisine',
  templateUrl: './cuisine.component.html',
  styleUrls: ['./cuisine.component.css']
})
export class CuisineComponent implements OnInit {

  listeCuisines:any;
  idResto: number;
  constructor(public cuisineService:CuisineService, public activatedRoute:ActivatedRoute,public router:Router) {
    this.idResto=activatedRoute.snapshot.params['id']; }

  ngOnInit() {
    this.chargement(this.idResto);
  }

  chargement(id: number){
    this.cuisineService.getCuisineResto(id).subscribe((res:Response) => this.listeCuisines = res.json());
  }

  ajouter(){
    this.router.navigate(['/ajoutercuisine',this.idResto]);
  }

  updateCuisine(id:number){
    this.router.navigate(['/modifiercuisine',id]);
  }

  deleteCuisine(id:number){
    var resultat;
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé!",
      icon:"warning"
    })
    .then((willDelete) => {
      if (willDelete) {
        this.cuisineService.deleteCuisine(id).subscribe(res=> resultat = res.json());
        console.log(resultat);
          swal("Poof! Cuisine supprimé !", {
            icon: "success",
          });
          this.chargement(this.idResto);      
      } else {
        swal("Cuisine non supprimé !");
      }
    });
  }
}
