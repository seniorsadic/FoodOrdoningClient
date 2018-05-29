import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Categorie} from "../model/model.categorie";

@Injectable()
export class CategorieService {


  URl:string="http://www.sadicomputing.com/FoodOrdering/web/"


  constructor(public http: Http) {}

  getCategories() {
    return this.http.get(this.URl+"categories");
  }

  getCategorieById(id:number) {
    return this.http.get(this.URl+"categories/"+id);
  }

  saveCategorie(categorie:Categorie) {
    return this.http.post(this.URl+"categories",categorie);
  }

  updateCategorie(categorie:Categorie) {
    return this.http.put(this.URl+"categories/"+categorie.id_categorie,categorie);
  }

  deleteCategorie(id:number) {
    return this.http.delete(this.URl+"categories/"+id);
  }

}
