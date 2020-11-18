import {Tag} from "./index"

interface IAction {
	type: string
}

export const ADD = 'ADD_TAG';
interface IAddTag extends IAction {
  type: typeof ADD;
  payload: Tag;
}

export function AddTag(tag: Tag): IAddTag {
  return {
    type: ADD,
    payload: tag,
  };
}

export const REMOVE = 'REMOVE_TAG';
interface IRemoveTag extends IAction {
  type: typeof REMOVE;
  payload: Tag;
}

export function RemoveTag(tag: Tag): IRemoveTag {
  return {
    type: REMOVE,
    payload: tag,
  };
}

export type TagActions = IAddTag | IRemoveTag;
