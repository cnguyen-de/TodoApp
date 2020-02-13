import {createAction, props} from '@ngrx/store';
import Todo from '../models/Todo';

export enum ActionTypes {
  ADD_TODO = '[Main Page] Add TODO',
  REMOVE_TODO = '[Main Page] Remove TODO',
  DONE_TODO = '[Main Page] Done TODO',
  GET_TODO = '[Main Page] Get TODO'
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

