import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UserRoutingModule} from './user-routing.module';
import {UserService} from "./services";
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserResolver} from "./services/user.resolver";


@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UserService,
    UserResolver,
  ]
})
export class UserModule { }
