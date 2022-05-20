import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserActivatorGuard, UserDeactivatorGuard, UserResolver} from "./services";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    canActivate: [UserActivatorGuard],
    canDeactivate: [UserDeactivatorGuard],
    children: [
      {
        path: ':id',
        component: UserDetailsComponent,
        resolve: {userData: UserResolver},
        canDeactivate: [UserDeactivatorGuard],
        canActivate: [UserActivatorGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
