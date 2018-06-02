import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Categorie} from "../model/model.categorie";

@Injectable()
export class CategorieService {
<<<<<<< HEAD
   URl2:string="http://www.sadicomputing.com/FoodOrdering/web/";
=======


  URl:string="http://www.sadicomputing.com/FoodOrdering/web/"


>>>>>>> d912cdd9052179600933507bccf7d5003fe1e339
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
<<<<<<< HEAD
    return this.http.delete(this.URl2+"categories/"+id);
=======
    return this.http.delete(this.URl+"categories/"+id);
>>>>>>> d912cdd9052179600933507bccf7d5003fe1e339
  }

}
