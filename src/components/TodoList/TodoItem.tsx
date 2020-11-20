import { Check, DotsVerticalOutline, TrashOutline } from 'heroicons-react'
import React, { memo } from 'react'
import { Todo } from '../../store/todo/index'
import './TodoItem.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { isEqual } from 'lodash'
import { RemoveTodo } from '../../store/todo/actions'
import { connect } from 'react-redux'
// TODO use memo here to watch showMenu variable

const mapDispatchToProps = { RemoveTodo }

function TodoItem({
    todo,
    onTodoCheck,
    showMenu,
    setShowMenu,
    RemoveTodo,
}: {
    todo: Todo
    onTodoCheck(t: Todo): void
    showMenu: boolean
    setShowMenu(t: number): void
    RemoveTodo(t: Todo): void
}) {
    // const [showMenu, setShowMenu] = React.useState(-1)

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
                                ? '70%'
                                : '50%'
                            : '95%',
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
                className="hiddenScrollbar flex justify-between items-center"
                style={{
                    maxWidth: todo.getTitle().length > 20 ? '20%' : '55%',
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
                <div className="dropdown">
                    <div
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowMenu(todo.getId())
                        }}
                        className="btn flex justify-center items-center w-6 h-6 hover:bg-gray-200 rounded-md text-gray-700"
                    >
                        <DotsVerticalOutline
                            className="text-current"
                            size={18}
                        />
                    </div>
                    <TransitionGroup className="todo-list">
                        {showMenu && (
                            <CSSTransition
                                key="1"
                                timeout={100}
                                classNames="item"
                            >
                                <ul className="absolute z-60 right-0 py-1 bg-white shadow-md rounded-md">
                                    <li
                                        className="flex justify-center items-center hover:bg-gray-200 rounded-sm py-1 px-2"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            RemoveTodo(todo)
                                        }}
                                    >
                                        <TrashOutline size={18} />{' '}
                                        <span className="font-bold text-sm ml-1">
                                            Delete
                                        </span>
                                    </li>
                                </ul>
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                </div>
            </div>
        </div>
    )
}

export default connect(
    null,
    mapDispatchToProps
)(
    memo(
        TodoItem,
        (prevProps: any, nextProps: any) => !isEqual(prevProps, nextProps)
    )
)
