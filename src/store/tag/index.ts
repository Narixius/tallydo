import { isArray } from 'lodash';
import { ADD,TagActions, REMOVE } from './actions';

export class Tag {
	private static baseId:number = 0;
	private readonly id:number;
	constructor(public title:string, public color: string, public defaultTodo:boolean=true){
		this.id = ++Tag.baseId;
	}
	public getId() {
		return this.id
	}
}
let defaultTage = localStorage.getItem('tags')
let tags: Tag[] = []
if (defaultTage && defaultTage.length > 0) {
    defaultTage = JSON.parse(defaultTage)
    if (isArray(defaultTage)) {
        defaultTage.forEach((item) => {
            tags.push(new Tag(item.title, item.color, item.defaultTodo))
        })
    }
}
if (tags.length === 0) {
    tags = [
        new Tag('work', '#67F4EC'),
        new Tag('Fun', '#67F46D'),
        new Tag('Study', '#F46767'),
        new Tag('Rest', '#E9F467'),
    ]
}
export const defaultTags = tags;

export type TagArray = Tag[];
let data ;
export function tagReducer(
  state: TagArray = [],
  action: TagActions
): TagArray {
  switch (action.type) {
    case ADD:
	  data  = [...state, action.payload];
	  window.localStorage.setItem('tags', JSON.stringify(data))
	  return data
	case REMOVE:
		data = state.filter((item) =>{
			if(item.getId() === action.payload.getId()){
				return false;
			}
			return item;
		})
	 	window.localStorage.setItem('tags', JSON.stringify(data))
		return data
    default:
      return state;
  }
}
