import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpService } from './generic-http/http-service';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: HttpService) { }
  getCountryList() {
    const url = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(url, {}).map((res) => res.json());
  }
}
