import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../../servives/catalogue.services';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
import { Router } from '@angular/router';
import { Catalogue } from '../../../model/model.catalogue';
import { RestaurantService } from '../../../servives/restaurant.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-ajoutercatalogue',
  templateUrl: './ajoutercatalogue.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css']
})
export class AjoutercatalogueComponent implements OnInit {

  catalogue:Catalogue
  listes:any;

  constructor(public catalogueservice:CatalogueService, public router:Router,public restoservice:RestaurantService) { }

  ngOnInit() {
      this.catalogue=new Catalogue();
      this.restoservice.getRestaurants().subscribe((res:Response)=> this.listes = res.json())
  }

  save(){
    this.catalogueservice.saveCatalogue(this.catalogue).subscribe((res:Response)=> this.catalogue = res.json());
    this.router.navigate(['/catalogues']);
  }

}
