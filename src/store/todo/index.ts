import { ADD,TodoActions, UPDATE, REMOVE } from './actions';
import {Tag} from "../tag"
import { isArray } from 'lodash';
import dayjs from 'dayjs';
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



let defaultTodo = localStorage.getItem('todos')
let todos: Todo[] = []
if (defaultTodo && defaultTodo.length > 0) {
    defaultTodo = JSON.parse(defaultTodo)
    if (isArray(defaultTodo)) {
        defaultTodo.forEach((item) => {
			const tags:Tag[] = item.tags.map((tag:any) =>{
				return new Tag(tag.title, tag.color, tag.defaultTodo)
			})
			let todo = new Todo(item.title, item.description, dayjs(item.dueDate).toDate(), tags);
			todo.setChecked(item.isCompleted)
            todos.push(todo);
        })
    }
}
export const defaultTodos = todos;



export function todoReducer(
  state: TodoArray = [],
  action: TodoActions
): TodoArray {
	let todos = [];
  switch (action.type) {
    case ADD:
		todos = [...state, action.payload];
		window.localStorage.setItem('todos', JSON.stringify(todos))
		return todos;
	case UPDATE:
		todos =  state.filter((item) =>{
			if(item.getId() === action.payload.getId()){
				item = action.payload
			}
			return item;
		})
		window.localStorage.setItem('todos', JSON.stringify(todos))
		return todos;
		case REMOVE:
		todos = state.filter((item) =>{
			if(item.getId()!== action.payload.getId()){
				return item;
			}
			return false;
		})
		window.localStorage.setItem('todos', JSON.stringify(todos))
		return todos;
    default:
      return state;
  }
}
