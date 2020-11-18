import {combineReducers} from 'redux'
import {todoReducer} from "./todo"
import {tagReducer} from "./tag"

export const rootState = combineReducers({
	todos: todoReducer,
	tags: tagReducer
});

export type RootState = ReturnType<typeof rootState>;
