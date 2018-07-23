import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../servives/catalogue.services';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  listes:any;
  nom:string;

  constructor(public catalogueservice:CatalogueService,public router:Router) { }

  ngOnInit() {
      this.nom=localStorage.getItem('nom')
      this.charger()
  }

  charger(){
    this.catalogueservice.getCatalogues().subscribe((res:Response) => this.listes = res.json());
  }

  deleteCatalogue(id:number){
    var resultat;
    swal({
      title: "Êtes-vous sûr?",
      text: "Une fois supprimé!",
      icon:"warning"
    })
    .then((willDelete) => {
      if (willDelete) {
        this.catalogueservice.deleteCatalogue(id).subscribe((res:Response) => resultat = res.json());
        console.log(resultat);
          swal("Poof! Catalogue supprimé !", {
            icon: "success",
          });
          this.charger();      
      } else {
        swal("Catalogue non supprimé !");
      }
    });
  }

  updateCatalogue(id:number){
      this.router.navigate(['/modifiercatalogue',id])
  }

  

}
