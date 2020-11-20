import { ADD,TodoActions, UPDATE, REMOVE } from './actions';
import {Tag} from "../tag"
export class Todo {
	private static baseId:number = 0;
	private readonly id:number;
	private isCompleted:boolean;
	constructor(private title:string, private description: string, private dueDate: Date, private tags: Tag[]){
		this.id = ++Todo.baseId;
		this.isCompleted = false
	}
	public getTitle():string{
		return this.title;
	}
	public getId():number{
		return this.id
	}
	public isChecked():boolean{
		return this.isCompleted
	}
	public setChecked(v:boolean):void{
		this.isCompleted = v;
	}
	public getDueDate():Date{
		return this.dueDate;
	}
	public getTags():Tag[]{
		return this.tags
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
	case UPDATE:
		return state.filter((item) =>{
			if(item.getId() === action.payload.getId()){
				item = action.payload
			}
			return item;
		})
		case REMOVE:
		return state.filter((item) =>{
			if(item.getId()!== action.payload.getId()){
				return item;
			}
			return false;
		})
    default:
      return state;
  }
}
