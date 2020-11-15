import { ADD, TodoActions } from './actions';

export class Todo {
	private static baseId = 0;
	private id:number;
	constructor(private title:string, private description: string, private isCompleted:boolean){
		this.id = ++Todo.baseId;
	}
	public getTitle(){
		return this.title;
	}
}

export type TodoArray = Todo[];

export function todoReducer(
  state: TodoArray = [],
  action: TodoActions
): TodoArray {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    default:
      return state;
  }
}
