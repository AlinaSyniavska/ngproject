import { Component, OnInit } from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  singlePost: IPost;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
      // this.singlePost = data as IPost;
      this.singlePost = data;
    })
  }

}
