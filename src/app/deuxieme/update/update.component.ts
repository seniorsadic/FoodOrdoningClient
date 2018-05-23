import { Component, OnInit } from '@angular/core';
import { Article } from '../../../model/model.article';
import { ArticleService } from '../../../servives/article.services';
import { CategorieService } from '../../../servives/categorie.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  article:Article;
  listeCategories:any;
  constructor(public articleservice: ArticleService,public categorieservice: CategorieService) { }

  ngOnInit() {
    this.article=new Article();
    this.categorieservice.getCategories().subscribe((res:Response) => this.listeCategories = res.json());
  }

}
