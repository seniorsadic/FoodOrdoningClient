import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
/* import {Article} from "../model/model.article"; */

@Injectable()
export class ReportCommandeService {

  URl:string="http://www.sadicomputing.com/FoodOrdering/web/";

  constructor(public http: Http) {}

  getReportCommande() {
    return this.http.get(this.URl+"reportcommande");
  }
/* 
  getArticleById(id:number) {
    return this.http.get(this.URl+"articles/"+id);
  }

  saveArticle(article:Article) {
    return this.http.post(this.URl+"articles",article);
  }

  updateArticle(article:Article) {
    return this.http.put(this.URl+"articles/"+article.id_article,article);
  }

  deleteArticle(id:number) {
    return this.http.delete(this.URl+"articles/"+id);
  } */

}