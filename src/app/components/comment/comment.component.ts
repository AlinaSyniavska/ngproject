import {Component, Input, OnInit} from '@angular/core';

import {IComment} from "../../interfaces";
import {DataCommentService} from "../../services";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment: IComment;

  constructor(private dataCommentService: DataCommentService) { }

  ngOnInit(): void {
  }

/*  saveToStorage() {
    this.dataCommentService.storage.next(this.comment);
  }*/
  saveToStorage(comment: IComment) {
    this.dataCommentService.storage.next(comment);
  }
}
