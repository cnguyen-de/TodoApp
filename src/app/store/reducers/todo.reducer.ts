import {
  Action,
  createReducer,
  on
} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {Todo} from '../models/Todo';
import * as todoActions from '../actions/todo.actions';


export interface State extends EntityState<Todo> {
  todos: Array<Todo>;
}
export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();
export const initialState: State = todoAdapter.getInitialState({
  todos: []
});


export const todoReducer = createReducer(
  initialState,
  on(todoActions.addTodo, (state, { todo }) => {
    console.log(state);
    return todoAdapter.addOne(todo, state);
  }),
  on(todoActions.removeTodo, (state, { id }) => {
    return todoAdapter.removeOne(id, state);
  }),
  on(todoActions.doneTodo, (state, { id }) => {
    return todoAdapter.removeOne(id, state);
  }),
  on(todoActions.getTodos, (state) => {
    return {...state };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return todoReducer(state, action);
}
