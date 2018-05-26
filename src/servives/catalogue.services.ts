import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Catalogue} from "../model/model.catalogue";

@Injectable()
export class CatalogueService {

  URl2:string="http://www.sadicomputing.com/FoodOrdering/web/"

  constructor(public http: Http) {}

  getCatalogues() {
    return this.http.get(this.URl2+"catalogues");
  }

  getCatalogueById(id:number) {
    return this.http.get(this.URl2+"catalogues/"+id);
  }

  saveCatalogue(Catalogue:Catalogue) {
    return this.http.post(this.URl2+"catalogues",Catalogue);
  }

  updateCatalogue(Catalogue:Catalogue) {
    return this.http.put(this.URl2+"catalogues/"+Catalogue.id_catalogue,Catalogue);
  }

  deleteCatalogue(id:number) {
    return this.http.delete(this.URl2+"catalogues/"+id); 
  }

}