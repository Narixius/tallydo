import { groupBy } from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../store'
import { Todo, TodoArray } from '../../store/todo'
import { UpdateTodo } from '../../store/todo/actions'
import TodoGroup from './TodoGroup'
import dayjs from 'dayjs'

const mapStateToProps = ({ todos }: RootState) => {
    return { todos }
}

const mapDispatchToProps = { UpdateTodo }

type Props = {
    todos: TodoArray
}

function TodoList({ todos }: Props) {
    const groups = groupBy(todos, (todo: Todo) =>
        dayjs(todo.getDueDate()).format('DD-MM-YYYY')
    )

    return (
        <div className="md:w-1/2">
            <div className=" h-full p-5">
                <div className=" rounded-2xl p-10 h-full bg-white">
                    <h2 className="text-black-blue font-bold text-2xl">
                        Timeline
                    </h2>
                    <p className="mt-2 text-gray-500 text-sm">
                        “It's time to start living the life you've imagined”
                        <span className="text-xs">- Henry James</span>
                    </p>
                    <div className="list mt-5">
                        <TodoGroup groups={groups} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
