import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";
import {TodosComponent} from "./components/todos/todos.component";
import {TodoActivatorGuard, TodoDeactivatorGuard} from "./guards";
import {TodoResolver} from "./services";

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    canActivate: [TodoActivatorGuard],
    canDeactivate: [TodoDeactivatorGuard],
    children: [
      {path: ':id', component: TodoDetailsComponent, resolve: {todoData: TodoResolver}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
