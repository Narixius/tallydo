import {Todo} from "./index"

interface IAction {
	type: string
}

export const ADD = 'ADD';
interface IAddTodo extends IAction {
  type: typeof ADD;
  payload: Todo;
}

export function AddTodo(todo: Todo): IAddTodo {
  return {
    type: ADD,
    payload: todo,
  };
}

export type TodoActions = IAddTodo;
