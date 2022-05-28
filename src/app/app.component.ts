import { Component } from '@angular/core';

import {IPost, IUser} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngproject';
  user: IUser;
  post: IPost;

  catchUserEmitToApp($event: IUser) {
    this.user = $event;
  }

  catchPostEmitToApp($event: IPost) {
    this.post = $event;
  }
}
