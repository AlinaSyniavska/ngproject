import {Component, Input, OnInit} from '@angular/core';

import {IExchangeRate} from "../../interfaces";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input()
  course: IExchangeRate;


  constructor() { }

  ngOnInit(): void {
  }

}
