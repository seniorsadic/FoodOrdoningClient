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
    return this.http.get("http://www.sadicomputing.com/FoodOrdering/web/categories/"+id);
  }

  saveCategorie(categorie:Categorie) {
    return this.http.post("http://www.sadicomputing.com/FoodOrdering/web/categories",categorie);
  }

  updateCategorie(categorie:Categorie) {
    return this.http.put("http://www.sadicomputing.com/FoodOrdering/web/categories/"+categorie.id_categorie,categorie);
  }

  deleteCategorie(id:number) {
    return this.http.delete("http://www.sadicomputing.com/FoodOrdering/web/categories/"+id);
  }

}