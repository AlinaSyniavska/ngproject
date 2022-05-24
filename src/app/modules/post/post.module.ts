import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { PostRoutingModule } from './post-routing.module';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {PostResolver, PostService} from "./services";
import {PostGuard} from "./guards";


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
    PostGuard
  ]
})
export class PostModule { }
