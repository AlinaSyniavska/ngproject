import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import {TodoResolver, TodoService} from "./services";
import {TodoActivatorGuard, TodoDeactivatorGuard} from "./guards";


@NgModule({
  declarations: [
    TodoComponent,
    TodosComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TodoRoutingModule
  ],
  providers: [
    TodoService,
    TodoResolver,
    TodoActivatorGuard,
    TodoDeactivatorGuard
  ]
})
export class TodoModule { }
