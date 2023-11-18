import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TodoContainerComponent } from './todo-container.component';
import { TodoService } from '../services/todo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TodoContainerComponent', () => {
  let fixture: ComponentFixture<TodoContainerComponent>;
  let comp: TodoContainerComponent;
  let todoService: Partial<TodoService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        TodoContainerComponent
      ],
      providers: [TodoService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoContainerComponent);
    comp = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    todoService.addTodo({
      title: 'New Todo',
      completed: false
    });
    fixture.detectChanges();
  });

  it('should add a todo', (done) => {
    comp.todos$.subscribe(todos => {
      expect(todos.length).toBe(1);
      done();
    })
  });

  it('should remove a todo', (done) => {
    comp.handleTodoRemoved(0);
    comp.todos$.subscribe(todos => {
      expect(todos.length).toBe(0);
      done();
    });
  });
});
