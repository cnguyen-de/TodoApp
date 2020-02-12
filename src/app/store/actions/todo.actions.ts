import {createAction, props} from '@ngrx/store';
import {Todo} from '../models/Todo';
import {Action} from 'rxjs/internal/scheduler/Action';

export enum ActionTypes {
  ADD_TODO = '[Action] Add TODO',
  REMOVE_TODO = '[Action] Remove TODO',
  DONE_TODO = '[Action] Done TODO',
  GET_TODO = '[Action] Get TODO'
}

export const addTodo = createAction(
  ActionTypes.ADD_TODO, props<{todo: Todo}>()
);

export const removeTodo = createAction(
  ActionTypes.REMOVE_TODO, props<{id: string}>()
);

export const doneTodo = createAction(
  ActionTypes.DONE_TODO, props<{id: string}>()
);

export const getTodos = createAction(
  ActionTypes.GET_TODO
);

