import Todo from './Todo';

export default class State {
  todos: Array<Todo>;
}

export const initializeState = (): State => {
  return { todos: Array<Todo>() };
};
