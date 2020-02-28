import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import State from '../../store/models/todo.states';
import Todo from '../../store/models/Todo';
import {select, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import * as todoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'TodoApp';
  todos$: Observable<State>;
  todoSubscription: Subscription;
  todos: Todo[] = [];
  text: string;
  @ViewChild('input') inputElem: ElementRef;
  constructor(private store: Store<{ todos: State }>) {
    this.todos$ = store.pipe(select('todos'));
  }

  ngOnInit() {
    this.todoSubscription = this.todos$.pipe(
      map(data => {
          this.todos = data.todos;
        }
      )
    ).subscribe();
    this.store.dispatch(todoActions.getTodos());
  }

  addTodo() {
    const newTodo: Todo = {
      // tslint:disable-next-line:new-parens
      id: Number(new Date).toString(36),
      text: this.text,
      status: 'Todo'
    };
    this.store.dispatch(todoActions.addTodo({todo: newTodo}));
    this.text = '';
  }

  removeTodo(id) {
    this.store.dispatch(todoActions.removeTodo({id}));
  }

  doneTodo(id) {
    this.store.dispatch(todoActions.doneTodo({id}));
  }

}
