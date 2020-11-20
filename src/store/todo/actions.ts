import {Todo} from "./index"

interface IAction {
	type: string
}

export const ADD = 'ADD_TODO';
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

export const UPDATE = 'UPDATE_TODO';
interface IUpdateTodo extends IAction {
  type: typeof UPDATE;
  payload: Todo;
}

export function UpdateTodo(todo: Todo): IUpdateTodo {
  return {
    type: UPDATE,
    payload: todo,
  };
}

export const REMOVE = 'REMOVE_TODO';
interface IRemoveTodo extends IAction {
  type: typeof REMOVE;
  payload: Todo;
}

export function RemoveTodo(todo: Todo): IRemoveTodo {
  return {
    type: REMOVE,
    payload: todo,
  };
}

export type TodoActions = IAddTodo | IUpdateTodo | IRemoveTodo;
