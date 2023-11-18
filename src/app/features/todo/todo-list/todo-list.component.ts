import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list[todos]',
  templateUrl: './todo-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
  @Output() todoRemoved: EventEmitter<number> = new EventEmitter<number>();
  @Output() todoToggled: EventEmitter<number> = new EventEmitter<number>();
  @Input() todos: Todo[] = [];

  handleRemoveTodoButtonClicked(index: number): void {
    this.todoRemoved.emit(index);
  }

  handleTodoToggled(index: number): void {
    this.todoToggled.emit(index);
  }

  trackTodo(index: number): number {
    return index;
  }
}
