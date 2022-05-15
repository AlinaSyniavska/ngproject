import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comment/comment.component';
import {CommentDetailsComponent} from "./components/comment-details/comment-details.component";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    HomeComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'homePage', pathMatch: 'full'},
      {path: 'homePage', component: HomeComponent},
      {
        path: 'usersPage',
        component: UsersComponent,
        // usersPage/usersDetails/id
        children: [
          {path: 'userDetails/:id', component: UserDetailsComponent}
        ]
      },
      {
        path: 'postsPage',
        component: PostsComponent,
        children: [
          {path: 'postDetails/:id', component: PostDetailsComponent}
        ]
      },
      {
        path: 'commentsPage',
        component: CommentsComponent,
        children: [
          {path: 'commentDetails/:id', component: CommentDetailsComponent}
        ]
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
