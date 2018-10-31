import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }
  getCountryList() {

    return new Promise((resolve, reject) => {
      const url = 'https://restcountries.eu/rest/v2/all';
      this.http.get(url).map((res) => res.json()).subscribe(data => {
        resolve(data);
      });
    });
    //   return this.http.get('https://restcountries.eu/rest/v2/all')
    //     .map((res: Response) => {
    //       res.json();
    // });
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');

    // let options = new RequestOptions({ headers: headers });

    // let url = 'https://restcountries.eu/rest/v2/all';
    // return new Promise((resolve, reject) => {
    //   this.http.post(url, headers: new HttpHeaders().set('Content-Type', 'application/json'))
    //     .map((res) => res.json()).subscribe(data => {
    //       resolve(data);
    //     });
    // });
  }
}
