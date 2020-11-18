import React, { forwardRef } from 'react'
import { connect } from 'react-redux'
import { UpdateTodo } from '../../store/todo/actions'
import { Todo } from '../../store/todo/index'
import TodoItem from './TodoItem'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import isToday from 'dayjs/plugin/isToday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import dayjs from 'dayjs'
import { sortBy, zipObject } from 'lodash'
import FlipMove from 'react-flip-move'

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
    // sort object keys by date
    var keys = sortBy(Object.keys(groups), (key) => {
        return dayjs(key, 'DD-MM-YYYY').toDate()
    })

    // remake object with sorted keys
    let clonedGroups = zipObject(
        keys,
        keys.map((item) => groups[item])
    )
    groups = clonedGroups

    // sort by alphabet
    Object.keys(groups).forEach((key) => {
        groups[key] = sortBy(groups[key], (item) => {
            return item.getTitle()
        })
    })

    // Sort by done/undone todos
    Object.keys(groups).forEach((key) => {
        groups[key] = sortBy(groups[key], (item) => {
            return item.isChecked()
        })
    })

    const todoCheckedHandler = (item: Todo): void => {
        let v: boolean = true
        if (item.isChecked()) {
            v = false
        }
        item.setChecked(v)

        UpdateTodo(item)
    }
    type ppp = {
        todo: Todo
        onTodoCheck(t: Todo): void
    }
    const FunctionalTodoItem = forwardRef((props: ppp, ref: any) => (
        <div ref={ref}>
            <TodoItem onTodoCheck={props.onTodoCheck} todo={props.todo} />
        </div>
    ))

    const groupTodos = (todos: Todo[]) => {
        return todos.map((item) => {
            return (
                <FunctionalTodoItem
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
        if (d.year() === dayjs().year()) return d.format('ddd, D MMM')
        else return d.format('ddd, D MMM, YYYY')
    }

    return (
        <div className="todo-groups">
            <FlipMove
                staggerDurationBy="30"
                duration={200}
                appearAnimation="accordionVertical"
                enterAnimation="accordionVertical"
                leaveAnimation="accordionVertical"
            >
                {Object.keys(groups).map((groupName: string) => {
                    return (
                        <div className="todoGroup mb-10" key={groupName}>
                            <span className="mb-2 block font-bold">
                                {parseGroupName(groupName)}
                            </span>
                            <FlipMove
                                staggerDurationBy="30"
                                duration={200}
                                appearAnimation="accordionVertical"
                                enterAnimation="accordionVertical"
                                leaveAnimation="accordionVertical"
                            >
                                {groupTodos(groups[groupName])}
                            </FlipMove>
                        </div>
                    )
                })}
            </FlipMove>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoGroup)
