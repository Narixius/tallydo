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
        'todo-item mb-2 text-black-blue p-2 rounded-md flex justify-between select-none  cursor-pointer bg-active-todo'

    let todoCheckBoxClassName = 'circle border-2 rounded-full  bg-whtie'

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
            <div
                className="flex items-center "
                style={{
                    maxWidth:
                        todo.getTags().length > 0
                            ? todo.getTitle().length > 20
                                ? '75%'
                                : '55%'
                            : '100%',
                }}
            >
                <div className={todoCheckBoxClassName}>
                    {todo.isChecked() && <Check size={14} />}
                </div>
                <span className={todoTitleClassName + ' w-full truncate'}>
                    {todo.getTitle()}
                </span>
            </div>
            <div
                className="hiddenScrollbar"
                style={{
                    maxWidth: todo.getTitle().length > 20 ? '25%' : '45%',
                    overflowX: 'scroll',
                }}
            >
                {todo.getTags().map((tag) => {
                    return (
                        <span
                            key={tag.getId()}
                            className="ml-1 px-2 py-1 rounded-md font-bold text-sm"
                            style={{ backgroundColor: tag.color }}
                        >
                            {tag.title}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default TodoItem
