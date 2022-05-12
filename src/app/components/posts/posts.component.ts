import {Component, Input, OnInit} from '@angular/core';
import {PostService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  @Input()
  userId: number;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService
      .getByUserId(this.userId)
      .subscribe(value => this.posts = value);
  }

}
