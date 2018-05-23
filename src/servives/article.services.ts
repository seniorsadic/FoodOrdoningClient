import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Article} from "../model/model.article";

@Injectable()
export class ArticleService {

  constructor(public http: Http) {}

  getArticles() {
    return this.http.get("http://localhost/myappli/web/app_dev.php/articles");
  }

  getArticleById(id:number) {
    return this.http.get("http://localhost/myappli/web/app_dev.php/articles/"+id);
  }

  saveArticle(article:Article) {
    return this.http.post("http://localhost/myappli/web/app_dev.php/articles",article);
  }

  updateArticle(article:Article) {
    return this.http.put("http://localhost/myappli/web/app_dev.php/articles/"+article.id_article,article);
  }

  deleteArticle(id:number) {
    return this.http.delete("http://localhost/myappli/web/app_dev.php/articles/"+id);
  }

}