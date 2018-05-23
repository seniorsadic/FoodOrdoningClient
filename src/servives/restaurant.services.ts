import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Restaurant} from "../model/model.restaurant";
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantService {

  constructor(public http: Http, public http1:HttpClient) {}

  getRestaurants() {
    return this.http.get("http://localhost/myappli/web/app_dev.php/restaurants");
  }

  getRestaurantById(id:number) {
    return this.http.get("http://localhost/myappli/web/app_dev.php/restaurants/"+id);
  }

  test():Observable<Restaurant[]>{
    return this.http1.get<Restaurant[]>("localhost");
  }

  saveRestaurant(restaurant:Restaurant) {
    return this.http.post("http://localhost/myappli/web/app_dev.php/restaurants",restaurant);
    
  }

  updateRestaurant(restaurant:Restaurant) {
    return this.http.put("http://localhost/myappli/web/app_dev.php/restaurants/"+restaurant.id_resto,restaurant);
  }

  deleteRestaurant(id:number) {
    return this.http.delete("http://localhost/myappli/web/app_dev.php/restaurants/"+id);
  }

}