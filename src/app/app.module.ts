import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PremierComponent } from './premier/premier.component';
import { DeuxiemeComponent } from './deuxieme/deuxieme.component';
import { RouterModule, Routes} from '@angular/router';
import { CreerComponent } from './deuxieme/creer/creer.component';
import { UpdateComponent } from './deuxieme/update/update.component';
import {HttpModule} from '@angular/http';
import {ArticleService} from '../servives/article.services';
import {FormsModule} from '@angular/forms';
import { CategorieService } from '../servives/categorie.services';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AjouterComponent } from './restaurant/ajouter/ajouter.component';
import { RestaurantService } from '../servives/restaurant.services';
import { HttpClientModule } from '@angular/common/http';
import { ModifierComponent } from './restaurant/modifier/modifier.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticleComponent } from './article/article.component';
import { AjouterArticleComponent } from './article/ajouter-article/ajouter-article.component';
import { ModifierArticleComponent } from './article/modifier-article/modifier-article.component';
import { CatalogueService } from '../servives/catalogue.services';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ReportcommandeComponent } from './reportcommande/reportcommande.component';
import { AjoutercatalogueComponent } from './catalogue/ajoutercatalogue/ajoutercatalogue.component';
import { ModifierrcatalogueComponent } from './catalogue/modifierrcatalogue/modifierrcatalogue.component';
import { MenuComponent } from './menu/menu.component';
import { ListeproduitsComponent } from './menu/listeproduits/listeproduits.component';
import { AddArticleComponent } from './menu/add-article/add-article.component';
import { ReportCommandeService } from '../servives/reportcommande.services';
import { EmployeesService } from '../servives/employee.services';

const appRoutes: Routes = [
    { path: 'articles', component: ArticleComponent},
    { path: 'addarticle/:id', component: AddArticleComponent},
    { path: 'menu', component: MenuComponent},
    { path: 'modifierarticle/:id', component: ModifierArticleComponent},
    { path: 'ajouterarticle', component: AjouterArticleComponent},
    { path: 'restaurants', component: RestaurantComponent},
    { path: 'ajouterrestaurant', component: AjouterComponent},
    { path: 'modifierrestaurant/:id', component: ModifierComponent},
    { path: 'catalogues', component: CatalogueComponent},
    { path: 'ajoutercatalogue', component: AjoutercatalogueComponent},
    { path: 'modifiercatalogue/:id', component: ModifierrcatalogueComponent},
    { path: 'reportcommande', component: ReportcommandeComponent},
    { path: 'home', component: AccueilComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
  ];


@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    CreerComponent,
    UpdateComponent,
    RestaurantComponent,
    AjouterComponent,
    ModifierComponent,
    AccueilComponent,
    ArticleComponent,
    AjouterArticleComponent,
    ModifierArticleComponent,
    CatalogueComponent,
    AjoutercatalogueComponent,
    ModifierrcatalogueComponent,
    MenuComponent,
    ListeproduitsComponent,
    AddArticleComponent,
    ReportcommandeComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule, FormsModule, HttpClientModule
  ],
  providers: [ArticleService, CategorieService, RestaurantService,CatalogueService,ReportCommandeService,EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
