import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Country } from './../country';
import { AppService } from './../app.service'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AppService]
})
export class DashboardComponent implements OnInit {
  private country: Country;
  private countryList: Array<Country> = [];
  private countryDetails: Array<Country> = [];

  constructor(private appService: AppService) {

  }

  ngOnInit() {
    let data = this.appService.getCountryList().subscribe(data => {
      this.countryList = data;
    });
  }

  pick(subject: Country): void {
    this.country = subject;
    let that = this;
    this.countryDetails = this.countryList.filter(function (rec: Country) {
      return rec.name === that.country.name;
    });
  }
}

