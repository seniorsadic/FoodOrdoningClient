import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../servives/auhentification.services';
import { Connect } from '../../model/model.connect';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:Connect=new Connect()

  constructor(public auth:AuthentificationService) { }

  ngOnInit() {
  }

}
