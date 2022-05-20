import { Component, OnInit } from '@angular/core';
import {IExchangeRate} from "../../interfaces";
import {ExchangeRateService} from "../../services";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: IExchangeRate[];

  constructor(private exchangeRateService: ExchangeRateService) { }

  ngOnInit(): void {
    this.exchangeRateService.getCourses().subscribe(value => this.courses = value);
  }

}
