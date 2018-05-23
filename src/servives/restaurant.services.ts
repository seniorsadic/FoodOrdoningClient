import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Restaurant} from "../model/model.restaurant";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class RestaurantService {

  constructor(public http: Http) {}

  getRestaurants() {
    return this.http.get("http://localhost/myappli/web/app_dev.php/restaurants");
  }

  getRestaurantById(id:number) {
    return this.http.get("http://localhost/myappli/web/app_dev.php/restaurants/"+id);
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