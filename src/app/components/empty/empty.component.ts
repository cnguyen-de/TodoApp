import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import State from '../../store/models/todo.states';
import {Observable, Subscription} from 'rxjs';
import Todo from '../../store/models/Todo';
import {map} from 'rxjs/operators';
import * as todoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.css']
})
export class EmptyComponent implements OnInit {

  todoSubscription: Subscription;
  todos: Todo[] = [];
  todos$: Observable<State>;
  constructor(private store: Store<{ todos: State }>) {
    this.todos$ = store.pipe(select('todos'));
  }
  ngOnInit(): void {
    this.todoSubscription = this.todos$.pipe(
      map(data => {
          this.todos = data.todos;
        }
      )
    ).subscribe();
    this.store.dispatch(todoActions.getTodos());
  }

}
