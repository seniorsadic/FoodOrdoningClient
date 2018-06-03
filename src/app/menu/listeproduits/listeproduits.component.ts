import { Component,EventEmitter, OnInit } from '@angular/core';
import { Categorie } from '../../../model/model.categorie';
import { ArticleService } from '../../../servives/article.services';
import { Response } from '@angular/http';
import { Article } from '../../../model/model.article';

@Component({
  selector: 'app-listeproduits',
  inputs: ['categorie'],
  outputs:['onArticleSelected'],
  templateUrl: './listeproduits.component.html',
  styleUrls: ['./listeproduits.component.css']
})
export class ListeproduitsComponent implements OnInit {

  categorie:Categorie;
  listes:any;
  onProductSelected:EventEmitter<Article>;
  currentProduct:Article;
  constructor(public articleservice:ArticleService) { 
    this.onProductSelected=new EventEmitter();
  }

  ngOnInit() {
    this.articleservice.getArticlesByCategorie(this.categorie.id_categorie).subscribe((res:Response) => this.listes = res.json())
  }

  clicked(article: Article): void {
    this.currentProduct = article;
    this.onProductSelected.emit(article);
  }

  isSelected(article: Article): boolean {
    if (!article || !this.currentProduct) {
      return false;
    }
    return article.id_article === this.currentProduct.id_article;
  }

}
