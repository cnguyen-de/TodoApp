import {
  Action,
  createReducer,
  on
} from '@ngrx/store';
import Todo from '../models/Todo';
import State, { initializeState } from '../models/todo.states';
import * as todoActions from '../actions/todo.actions';

export const initialState = initializeState();

export const todoReducer = createReducer(
  initialState,
  on(todoActions.addTodo, (state, { todo }) => {
    return {...state, todos: [...state.todos, todo]};
  }),
  on(todoActions.removeTodo, (state, { id }) => {
    console.log(state.todos);
    const index = state.todos.findIndex(x => x.id === id);
    console.log(index);
    let newTodos = state.todos.slice();
    if (index !== undefined) {
      newTodos.splice(index, 1);
      console.log(newTodos);
    }
    return {...state, todos: { ...newTodos }};
  }),
  on(todoActions.getTodos, state => state)
);

export function ToDoReducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
