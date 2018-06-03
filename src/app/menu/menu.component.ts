import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../servives/categorie.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listes:any;
  constructor(public categorieservice:CategorieService) { }

  ngOnInit() {
    this.categorieservice.getCategories().subscribe((res:Response) => this.listes = res.json())
  }

}
