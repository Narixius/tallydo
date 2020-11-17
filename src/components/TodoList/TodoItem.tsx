import { Check } from 'heroicons-react'
import React from 'react'
import { Todo } from '../../store/todo/index'
import './TodoItem.css'

function TodoItem({
    todo,
    onTodoCheck,
}: {
    todo: Todo
    onTodoCheck(t: Todo): void
}) {
    let className =
        'todo-item mb-2 text-black-blue p-2 rounded-md flex items-center select-none  cursor-pointer bg-active-todo'

    let todoCheckBoxClassName = 'circle border-2 rounded-full w-5 h-5 bg-whtie'

    let todoTitleClassName = 'ml-2 font-medium'
    if (todo.isChecked()) {
        className += ' bg-opacity-25 done-todo opacity-75'
        todoCheckBoxClassName += ' border-green-400 text-green-400'
        todoTitleClassName += ' text-green-400 line-through'
    } else {
        todoCheckBoxClassName += '  border-black-blue'
    }

    return (
        <div
            onClick={() => {
                onTodoCheck(todo)
            }}
            className={className}
        >
            <div className={todoCheckBoxClassName}>
                {todo.isChecked() && <Check size={14} />}
            </div>
            <span className={todoTitleClassName}>{todo.getTitle()}</span>
        </div>
    )
}

export default TodoItem
