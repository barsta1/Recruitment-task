import { NgModule } from '@angular/core';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CommonModule } from '@angular/common';
import { ButtonInputModule } from '../../ui/button-input/button-input.module';
import { RouterModule } from '@angular/router';
import { todoRoutes } from './todo.routes';

@NgModule({
  declarations: [
    TodoContainerComponent,
    TodoListComponent
  ],
  imports: [
    ButtonInputModule,
    CommonModule,
    RouterModule.forChild(todoRoutes),
  ]
})
export class TodoModule {
}
