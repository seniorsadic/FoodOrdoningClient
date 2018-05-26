import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Categorie} from "../model/model.categorie";

@Injectable()
export class CategorieService {

<<<<<<< HEAD
  URl:string="http://www.sadicomputing.com/FoodOrdering/web/"
=======
  URl2:string="http://www.sadicomputing.com/FoodOrdering/web/"
>>>>>>> ccedcbd3890e28bbc6343c98f77474e51a810c33

  constructor(public http: Http) {}

  getCategories() {
<<<<<<< HEAD
    return this.http.get(this.URl+"categories");
=======
    return this.http.get(this.URl2+"categories");
>>>>>>> ccedcbd3890e28bbc6343c98f77474e51a810c33
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
<<<<<<< HEAD
    return this.http.delete(this.URl+"categories/"+id);
=======
    return this.http.delete(this.URl2+"categories/"+id); 
>>>>>>> ccedcbd3890e28bbc6343c98f77474e51a810c33
  }

}