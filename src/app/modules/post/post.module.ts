import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostRoutingModule } from './post-routing.module';
import {PostService} from "./services";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostResolver} from "./services/post.resolver";


@NgModule({
  declarations: [
    PostDetailsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers: [
    PostService,
    PostResolver,
  ]
})
export class PostModule { }
