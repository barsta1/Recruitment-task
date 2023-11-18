import {
  ChangeDetectionStrategy,
  Component,
  OnInit
} from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent implements OnInit {
  readonly todos$ = this._todoService.todos$;
  constructor(private readonly _todoService: TodoService) {
  }

  ngOnInit() {
    this._todoService.fetchTodos();
  }

  handleTodoAdded(todoTitle: string): void {
    this._todoService.addTodo({ title: todoTitle, completed: false });
  }

  handleTodoRemoved(removedTodoIndex: number): void {
    this._todoService.removeTodo(removedTodoIndex);
  }

  handleTodoToggled(toggledTodoIndex: number): void {
    this._todoService.toggleTodoStatus(toggledTodoIndex);
  }
}
