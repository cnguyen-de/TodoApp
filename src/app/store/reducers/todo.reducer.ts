import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {Todo} from '../models/Todo';
import {addTodo, removeTodo, doneTodo, getTodos} from '../actions/todo.actions';

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>({});

export interface AppState {
  todos: Todo[];
}

const initialState = todoAdapter.getInitialState({
  todos: []
});

export const allTodos = (state: AppState) => state.todos;

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { todo }) => {
    return todoAdapter.addOne(todo, state);
  }),
  on(removeTodo, (state, { id }) => {
    return todoAdapter.removeOne(id, state);
  }),
  on(doneTodo, (state, { id }) => {
    return todoAdapter.removeOne(id, state);
  }),
  on(getTodos, (state, { todos }) => {
    return {...todos, ...state};
  })
);
