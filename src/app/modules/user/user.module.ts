import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {UserRoutingModule} from './user-routing.module';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {UserResolver, UserService} from "./services";
import {UserActivatorGuard, UserDeactivatorGuard} from "./guards";

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
    UserActivatorGuard,
    UserDeactivatorGuard
  ]
})
export class UserModule { }
