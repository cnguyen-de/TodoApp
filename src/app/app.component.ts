import {Component, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Todo} from './store/models/Todo';
import {RootStoreConfig, select, Store} from '@ngrx/store';
import * as todoActions from './store/actions/todo.actions';
import {State} from './store/reducers/todo.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TodoApp';
  todos$: Observable<State>;
  todos: Todo[] = [];
  todoSubscription: Subscription;
  text: string;
  constructor(private store: Store<{todos: State}>) {
    this.todos$ = store.pipe(select('todos'));
  }

  ngOnInit() {
    this.todoSubscription = this.todos$.pipe(
      map(data => {
          if (typeof data !== 'undefined') {
            this.todos = data.todos;
          }
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
      status: 'New'
    };
    console.log(this.todos$);
    this.store.dispatch(todoActions.addTodo({todo: newTodo}));
  }
}
