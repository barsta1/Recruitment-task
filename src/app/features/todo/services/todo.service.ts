import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Todo } from '../models/todo';

const TODO_LOCAL_STORAGE_KEY = 'todos';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private readonly _todos$$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  readonly todos$ = this._todos$$.asObservable();
  private readonly _singleTodoEmission$ = this.todos$.pipe(take(1));

  constructor(private readonly _httpService: HttpService) {
  }

  addTodo(newTodo: Todo): void {
    this._singleTodoEmission$
      .subscribe(todos => {
        const newTodos = [...todos, newTodo];
        this._updateTodos(newTodos);
      })
  }

  removeTodo(removedTodoIndex: number): void {
    this._singleTodoEmission$
      .subscribe(todos => {
        const newTodos = todos.filter((_, index) => index !== removedTodoIndex);
        this._updateTodos(newTodos);
      })
  }

  fetchTodos(): void {
    this._httpService.fetchWithLocalStorageCheck(API_URL, TODO_LOCAL_STORAGE_KEY, this._todos$$, (todos: Todo[]) => this._updateTodosInLocalStorage(todos));
  }

  toggleTodoStatus(toggledTodoIndex: number): void {
    this._singleTodoEmission$.subscribe((todos) => {
      const updatedTodos = todos.map((todo, index) => {
        if (index === toggledTodoIndex) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
      this._updateTodos(updatedTodos);
    })
  }

  private _updateTodosInLocalStorage(todos: Todo[]): void {
    LocalStorageService.setItem(TODO_LOCAL_STORAGE_KEY, todos);
  }

  private _updateTodos(todos: Todo[]): void {
    this._todos$$.next(todos);
    this._updateTodosInLocalStorage(todos);
  }
}
