import { Check } from 'heroicons-react'
import React from 'react'
import { Todo } from '../../redux/todo/index'
import './TodoItem.css'

function todoItem({
    todo,
    onTodoCheck,
}: {
    todo: Todo
    onTodoCheck(t: Todo): void
}) {
    return (
        <div
            onClick={() => {
                onTodoCheck(todo)
            }}
            className="todo-item mb-2 text-black-blue p-2 bg-gray-200 rounded-md flex items-center select-none  cursor-pointer"
        >
            <div className="circle border border-black-blue rounded-full w-5 h-5">
                {todo.isChecked() && <Check size={14} />}
            </div>
            <span className="ml-2">{todo.getTitle()}</span>
        </div>
    )
}

export default todoItem
