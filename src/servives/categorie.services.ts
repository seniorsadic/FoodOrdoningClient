import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Categorie} from "../model/model.categorie";

@Injectable()
export class CategorieService {
<<<<<<< HEAD
   URl2:string="http://www.sadicomputing.com/FoodOrdering/web/";
  constructor(public http: Http) {}

  getCategories() {
    return this.http.get(this.URl2+"categories");
=======

  URl:string="http://www.sadicomputing.com/FoodOrdering/web/"

  constructor(public http: Http) {}

  getCategories() {
    return this.http.get(this.URl+"categories");
>>>>>>> 579f1aed972c5e6c9af850f923eebf4ff9a2ca48
  }

  getCategorieById(id:number) {
    return this.http.get(this.URl2+"categories/"+id);
  }

  saveCategorie(categorie:Categorie) {
    return this.http.post(this.URl2+"categories",categorie);
  }

  updateCategorie(categorie:Categorie) {
    return this.http.put(this.URl2+"categories/"+categorie.id_categorie,categorie);
  }

  deleteCategorie(id:number) {
    return this.http.delete(this.URl2+"categories/"+id);
  }

}