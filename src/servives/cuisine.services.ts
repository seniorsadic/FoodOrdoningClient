import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import { Cuisine } from '../model/model.cuisine';


@Injectable()
export class CuisineService {

  URl:string="http://www.sadicomputing.com/FoodOrdering/web/";

  constructor(public http: Http) {}

  getCuisine() {
    return this.http.get(this.URl+"cuisines");
  }

  getCuisineResto(id:number) {
    return this.http.get(this.URl+"cuisinesbyresto/"+id);
  }
 
  getCuisineById(id:number) {
    return this.http.get(this.URl+"cuisines/"+id);
  }

  saveCuisine(cuisine:Cuisine) {
    return this.http.post(this.URl+"cuisines",cuisine);
  }

  updateCuisine(cuisine:Cuisine) {
    return this.http.put(this.URl+"cuisines/"+cuisine.id_cuisine,cuisine);
  }

  deleteCuisine(id:number) {
    return this.http.delete(this.URl+"cuisines/"+id);
  }

 
}