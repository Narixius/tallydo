import {combineReducers} from 'redux'
import {todoReducer} from "./todo"

export const rootState = combineReducers({
	todos: todoReducer
});

export type RootState = ReturnType<typeof rootState>;
