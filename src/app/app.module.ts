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

const appRoutes: Routes = [
    { path: 'deuxieme', component: DeuxiemeComponent},
    { path: 'troisieme', component: CreerComponent},
    { path: 'creer', component: UpdateComponent},
    { path: 'restaurants', component: RestaurantComponent},
    { path: 'ajouterrestaurant', component: AjouterComponent},
    {path: '', redirectTo: '/deuxieme', pathMatch: 'full'}
  ];


@NgModule({
  declarations: [
    AppComponent,
    PremierComponent,
    DeuxiemeComponent,
    CreerComponent,
    UpdateComponent,
    RestaurantComponent,
    AjouterComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpModule, FormsModule, HttpClientModule
  ],
  providers: [ArticleService, CategorieService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
