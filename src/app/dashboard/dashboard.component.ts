import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private country: any;
  private countryList: Array<any> = [];
  private countryDetails: Array<any> = [];

  constructor(private http: Http) {
  }

  ngOnInit() {
    let that = this;
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((data: any) => {
      that.countryList = JSON.parse(data['_body']);
    });
  }

  pick(subject: any): void {
    this.country = subject;
    let that = this;
    // Here we already have required data of country to display. We can sort the countryList to get details of selected country
    // that.countryDetails = that.countryList.filter(function (rec: any) {
    //   return rec.name === that.country.name
    // });
    this.http.get(' https://restcountries.eu/rest/v2/name/' + this.country['name']).subscribe((data: any) => {
      that.countryDetails = JSON.parse(data['_body']);
    });
  }
}

