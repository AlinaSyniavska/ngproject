import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IExchangeRate} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<IExchangeRate[]> {
    return this.httpClient.get<IExchangeRate[]>(urls.p24CoursId5);
  }
}
