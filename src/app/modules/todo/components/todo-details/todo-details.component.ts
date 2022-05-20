import {Component, OnInit} from '@angular/core';
import {ITodo} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: ITodo;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({todoData}) => this.todo = todoData);
  }

}
