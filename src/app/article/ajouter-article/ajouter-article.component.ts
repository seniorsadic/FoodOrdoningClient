import { Component, OnInit } from '@angular/core';
import { Article } from '../../../model/model.article';
import { ArticleService } from '../../../servives/article.services';
import { CategorieService } from '../../../servives/categorie.services';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-article',
  templateUrl: './ajouter-article.component.html',
  styleUrls: ['../../../assets/css/bootstrap.min.css']
})
export class AjouterArticleComponent implements OnInit {

  article:Article;
  listeCategories:any;

  constructor(public articleservice:ArticleService, public categorieservice:CategorieService
  , public router:Router) { }

  ngOnInit() {
    this.article=new Article();
    this.categorieservice.getCategories().subscribe((res:Response) => this.listeCategories = res.json());
  }

  save(){
    this.articleservice.saveArticle(this.article).subscribe((res:Response) => this.article = res.json());
    console.log(this.article);
    this.router.navigate(['/articles']);
  }

}
