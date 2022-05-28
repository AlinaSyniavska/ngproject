import {Component, Input, OnInit} from '@angular/core';

import {ITodo} from "../../interfaces";
import {DataTodoService} from "../../services";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo: ITodo;

  constructor(private dataTodoService: DataTodoService) { }

  ngOnInit(): void {
  }

  saveToStorage(todo: ITodo) {
    this.dataTodoService.storage.next(todo);
  }
}
