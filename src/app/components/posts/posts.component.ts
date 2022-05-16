import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {PostService} from "../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  userPosts: IPost[];

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {

      let {state: {data}} = history;

      this.postService
        .getByUserId(data?.id)
        .subscribe(value => this.userPosts = value);
    })
  }

}
