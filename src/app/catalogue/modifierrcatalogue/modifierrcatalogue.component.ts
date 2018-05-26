import { Component, OnInit } from '@angular/core';
import { Catalogue } from '../../../model/model.catalogue';
import { CatalogueService } from '../../../servives/catalogue.services';
import { RestaurantService } from '../../../servives/restaurant.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-modifierrcatalogue',
  templateUrl: './modifierrcatalogue.component.html',
  styleUrls: ['./modifierrcatalogue.component.css']
})
export class ModifierrcatalogueComponent implements OnInit {

  catalogue:Catalogue;
  id:number;
  listes:any;

  constructor(public catalogueservice:CatalogueService,public restoservice:RestaurantService, public router:Router,public activatedRoute:ActivatedRoute) {
    this.id=activatedRoute.snapshot.params['id'];
   }

  ngOnInit() {
    this.catalogueservice.getCatalogueById(this.id).subscribe((res:Response)=> this.catalogue = res.json());
    this.restoservice.getRestaurants().subscribe((res:Response)=> this.listes = res.json());
  }

  modifier(){
    this.catalogueservice.updateCatalogue(this.catalogue).subscribe((res:Response)=> this.catalogue = res.json());
    this.router.navigate(['/catalogues']);
  }

}
