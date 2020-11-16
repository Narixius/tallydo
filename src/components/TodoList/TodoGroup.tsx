import React from 'react'
import { connect } from 'react-redux'
import { UpdateTodo } from '../../redux/todo/actions'
import { Todo } from '../../redux/todo/index'
import TodoItem from './TodoItem'

const mapStateToProps = null

const mapDispatchToProps = { UpdateTodo }

type todoGroups = {
    [key: string]: Todo[]
}

type Props = {
    UpdateTodo: typeof UpdateTodo
    groups: todoGroups
}

function TodoGroup({ groups, UpdateTodo }: Props) {
    const todoCheckedHandler = (item: Todo): void => {
        let v: boolean = true
        if (item.isChecked()) {
            v = false
        }
        item.setChecked(v)

        UpdateTodo(item)
    }

    const groupTodos = (todos: Todo[]) => {
        return todos.map((item) => {
            return (
                <TodoItem
                    onTodoCheck={todoCheckedHandler}
                    todo={item}
                    key={item.getId()}
                />
            )
        })
    }

    return (
        <div className="todo-groups">
            {Object.keys(groups).map((groupName: string) => {
                return (
                    <div className="todoGroup" key={groupName}>
                        <span>{groupName}</span>
                        {groupTodos(groups[groupName])}
                    </div>
                )
            })}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoGroup)
