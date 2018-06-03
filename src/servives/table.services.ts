import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Restaurant} from "../model/model.restaurant";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TableService {

  constructor(public http: Http) {}

}