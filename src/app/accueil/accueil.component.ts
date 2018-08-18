import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../servives/auhentification.services';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public auth:AuthentificationService) { }

  ngOnInit() {
    console.log(this.auth.isconnect())
  }

}
