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

  getCityWeather(city) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=7c2c187e5c0f4fa260bddd8edea19353';
    return this.http.get(url, {}).map((res) => res.json());
  }
}
