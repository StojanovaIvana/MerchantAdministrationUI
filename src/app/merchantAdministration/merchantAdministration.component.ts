import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchantAdministration',
  templateUrl: './merchantAdministration.component.html',
  styleUrls: ['./merchantAdministration.component.scss']
})
export class MerchantAdministrationComponent implements OnInit {

  constructor(
    private router: Router

  ) { }

  ngOnInit() {
  }
  onClick(){
    this.router.navigate(['merchants']);

  }
}
