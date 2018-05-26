import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Article} from "../model/model.article";

@Injectable()
export class ArticleService {

  constructor(public http: Http) {}

  getArticles() {
    return this.http.get("http://www.sadicomputing.com/FoodOrdering/web/articles");
  }

  getArticleById(id:number) {
    return this.http.get("http://www.sadicomputing.com/FoodOrdering/web/articles/"+id);
  }

  saveArticle(article:Article) {
    return this.http.post("http://www.sadicomputing.com/FoodOrdering/web/articles",article);
  }

  updateArticle(article:Article) {
    return this.http.put("http://www.sadicomputing.com/FoodOrdering/web/articles/"+article.id_article,article);
  }

  deleteArticle(id:number) {
    return this.http.delete("http://www.sadicomputing.com/FoodOrdering/web/articles/"+id);
  }

}