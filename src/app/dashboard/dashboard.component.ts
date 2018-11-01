import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Country } from './../country';
import { AppService } from './../app.service';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Weather } from './../weather';
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
  private weather: Weather;
  private interval = 0;
  private alive = false;
  private updatedRecord = 0;
  constructor(private appService: AppService) {

  }

  ngOnInit() {
    let data = this.appService.getCountryList().subscribe(data => {
      this.countryList = data;
    });
    this.weather = {
      wind: 0,
      humidity: 0,
      temp: 0
    };
    this.alive = false;
    this.interval = 5000;
  }

  pick(subject: Country): void {
    this.country = subject;
    let that = this;
    this.alive = true;
    this.countryDetails = this.countryList.filter(function (rec: Country) {
      return rec.name === that.country.name;
    });
    if (this.country.capital) {
      this.getUpdatedWeather();
    }
  }

  getUpdatedWeather() {
    let that = this;
    this.updatedRecord = 0;
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.appService.getCityWeather(this.country.capital)
          .subscribe((data) => {
            if (data.cod) {
              that.weather = {
                wind: data.wind,
                humidity: data.main.humidity,
                temp: data.main.temp
              }
              that.updatedRecord = that.updatedRecord + 1;
            } else {

            }

          },
          error => {
            console.log('errror');
            that.alive = false;
          }, );
      });
  }
  ngOnDestroy() {
    this.alive = false;
  }


}

