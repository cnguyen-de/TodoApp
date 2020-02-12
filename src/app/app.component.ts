import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Todo} from './store/models/Todo';
import {RootStoreConfig, select, Store} from '@ngrx/store';
import {addTodo, removeTodo, doneTodo, getTodos} from './store/actions/todo.actions';
import {allTodos} from './store/reducers/todo.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  todos$: Observable<any>;
  text: string;
  constructor(private store: Store<{todo: Todo}>) {
    // this.todos$ = store.select<Todo[]>(getTodos);
    // this.todos$ = store.pipe(select({getTodos}));
    // this.todos$ = store.pipe(select(allTodos));
  }

  addTodo() {
    const newTodo: Todo = {
      // tslint:disable-next-line:new-parens
      id: Number(new Date).toString(36),
      text: this.text,
      status: 'New'
    };
    console.log(this.todos$);
    this.store.dispatch(addTodo({todo: newTodo}));
  }
}
