import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Categorie} from "../model/model.categorie";

@Injectable()
export class CategorieService {

  constructor(public http: Http) {}

  getCategories() {
    return this.http.get("http://localhost/myappli/web/app_dev.php/categories");
  }

  getCategorieById(id:number) {
    return this.http.get("http://localhost/myappli/web/app_dev.php/categories/"+id);
  }

  saveCategorie(categorie:Categorie) {
    return this.http.post("http://localhost/myappli/web/app_dev.php/categories",categorie);
  }

  updateCategorie(categorie:Categorie) {
    return this.http.put("http://localhost/myappli/web/app_dev.php/categories/"+categorie.id_categorie,categorie);
  }

  deleteCategorie(id:number) {
    return this.http.delete("http://localhost/myappli/web/app_dev.php/categories/"+id);
  }

}