import { Component, OnInit } from '@angular/core';
import {ExchangeRateService} from "../../services";
import {IExchangeRates} from "../../interfaces";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  date = '';
  exchangeRates: IExchangeRates;

  getDate(): void {
    if (!this.date) {
      alert('Check the date!');
      return;
    }

    let editDate = this.date.split('-').reverse().join('.');

    this.exchangeRateService.getListExchangeRates(editDate)
      .subscribe(value => this.exchangeRates = value);

    /*this.exchangeRateService.getListExchangeRates()
      .subscribe(value => console.log(value));*/
  }

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
  }

}
