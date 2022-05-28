import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

import {IComment} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataCommentService {

  storage = new BehaviorSubject<IComment>({
    postId: 0,
    id: 0,
    name: '',
    email: '',
    body: ''
  })

  constructor() { }
}
