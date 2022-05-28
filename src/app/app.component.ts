import {Component, OnInit} from '@angular/core';

import {IComment, IPost, ITodo, IUser} from "./interfaces";
import {DataCommentService, DataTodoService} from "./services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user: IUser;
  post: IPost;
  comment: IComment;
  todo: ITodo;

  constructor(private dataCommentService: DataCommentService, private dataTodoService: DataTodoService) {
  }

  catchUserEmitToApp($event: IUser) {
    this.user = $event;
  }

  catchPostEmitToApp($event: IPost) {
    this.post = $event;
  }

  ngOnInit(): void {
    this.dataCommentService.storage.subscribe(value => this.comment = value);
    this.dataTodoService.storage.subscribe(value => this.todo = value);
  }
}
