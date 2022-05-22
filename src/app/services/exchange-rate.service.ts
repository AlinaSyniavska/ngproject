import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

import {IExchangeRate, IExchangeRates} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<IExchangeRate[]> {
    return this.httpClient.get<IExchangeRate[]>(urls.p24CoursId5);
  }

  getListExchangeRates(date: string): Observable<IExchangeRates> {
    return this.httpClient.get<IExchangeRates>('https://api.privatbank.ua/p24api/exchange_rates?json', {
      params: {
        date: date,
      }
    })
  }

/*  getListExchangeRates(): Observable<any> {

    const myHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*');

    return this.httpClient.get<any>('https://api.privatbank.ua/p24api/exchange_rates?json&date=01.12.2014',
      {
        headers: myHeaders,
      });
  }*/
}
