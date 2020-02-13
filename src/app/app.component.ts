import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import Todo from './store/models/Todo';
import { select, Store} from '@ngrx/store';
import * as todoActions from './store/actions/todo.actions';
import State from './store/models/todo.states';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
    this.inputElem.nativeElement.value = '';
  }

  removeTodo(id) {
    this.store.dispatch(todoActions.removeTodo({id}));
  }

  doneTodo(id) {
    this.store.dispatch(todoActions.doneTodo({id}));
  }
}
