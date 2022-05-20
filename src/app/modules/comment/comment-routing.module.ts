import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CommentsComponent} from "./components/comments/comments.component";
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
import {CommentGuard, CommentResolver} from "./services";

const routes: Routes = [
  {
    path: '', component: CommentsComponent, canActivate: [CommentGuard], canDeactivate: [CommentGuard], children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {commentData: CommentResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
