import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {ITodo} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataTodoService {

  storage = new BehaviorSubject<ITodo>({
    userId: 0,
    id: 0,
    title: '',
    completed: false
  })

  constructor() { }
}
