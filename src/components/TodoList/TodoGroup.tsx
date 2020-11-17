import React from 'react'
import { connect } from 'react-redux'
import { UpdateTodo } from '../../store/todo/actions'
import { Todo } from '../../store/todo/index'
import TodoItem from './TodoItem'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import dayjs from 'dayjs'
dayjs.extend(customParseFormat)
dayjs.extend(isToday)
dayjs.extend(isTomorrow)
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
    const parseGroupName = (groupName: string): string => {
        const d = dayjs(groupName, 'DD-MM-YYYY')

        if (d.isToday()) return 'Today'
        if (d.isTomorrow()) return 'Tomorrow'
        return d.format('ddd, D MMM')
    }

    return (
        <div className="todo-groups">
            {Object.keys(groups).map((groupName: string) => {
                return (
                    <div className="todoGroup mb-10" key={groupName}>
                        <span className="mb-2 block font-bold">
                            {parseGroupName(groupName)}
                        </span>
                        {groupTodos(groups[groupName])}
                    </div>
                )
            })}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoGroup)
