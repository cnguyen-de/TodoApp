import {
  Action,
  createReducer,
  on
} from '@ngrx/store';
import State, { initializeState } from '../models/todo.states';
import * as todoActions from '../actions/todo.actions';

export const initialState = initializeState();

export const todoReducer = createReducer(
  initialState,

  on(todoActions.addTodo, (state, { todo }) => {
    return {...state, todos: [...state.todos, todo]};
  }),

/*
  on(todoActions.removeTodo, (state, { id }) => {
    const index = state.todos.findIndex(x => x.id === id); // find index of the to-be-removed item
    if (index !== undefined) {
      state.todos.splice(index, 1);
    }
    return {...state, todos: [ ...state.todos ]};
  }),

  on(todoActions.doneTodo, (state, { id }) => {
    const index = state.todos.findIndex(x => x.id === id); // find index of the to-be-removed item
    if (index !== undefined && state.todos[index].status !== 'Done') {
      state.todos[index].status = 'Done';
    } else if ((index !== undefined && state.todos[index].status === 'Done')) {
      state.todos.splice(index, 1);
    }
    return {...state, todos: [ ...state.todos ]};
  }),
*/

  on(todoActions.removeTodo, (state, { id }) => {
    const index = state.todos.findIndex(x => x.id === id); // find index of the to-be-removed item
    const newTodos = state.todos.slice(); // make a copy because state.todos is immutable
    if (index !== undefined) {
      newTodos.splice(index, 1);
    }
    return {...state, todos: [ ...newTodos ]};
  }),

  on(todoActions.doneTodo, (state, { id }) => {
    const index = state.todos.findIndex(x => x.id === id); // find index of the to-be-removed item
    const newTodos = state.todos.slice(); // make a copy because state.todos is immutable
    if (index !== undefined) {

      const newTodo = JSON.parse(JSON.stringify(newTodos[index]));
      newTodo.status = 'Done';
      console.log(newTodo);
      newTodos.splice(index, 1, newTodo);
    }
    return {...state, todos: [ ...newTodos ]};
  }),

  on(todoActions.getTodos, state => state)
);

export function ToDoReducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
