import { Component, OnInit } from '@angular/core';
import { ReportCommandeService } from '../../servives/reportcommande.services';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

@Component({
  selector: 'app-reportcommande',
  templateUrl: './reportcommande.component.html',
  styleUrls: ['../../assets/css/bootstrap.min.css']
})
export class ReportcommandeComponent implements OnInit {

  reportCommandeResults:any;

  constructor(public reportcommande:ReportCommandeService,public router:Router) { }

  ngOnInit() {
    this.reportcommande.getReportCommande().subscribe((res:Response) => this.reportCommandeResults = res.json())
  }


}
