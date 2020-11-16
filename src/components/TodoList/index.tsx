import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/index'
import { Todo, TodoArray } from '../../redux/todo'
import { UpdateTodo } from '../../redux/todo/actions'
import TodoItem from './TodoItem'

const mapStateToProps = ({ todos }: RootState) => {
    return { todos }
}
const mapDispatchToProps = { UpdateTodo }

type Props = {
    UpdateTodo: typeof UpdateTodo
    todos: TodoArray
}

function TodoList({ todos, UpdateTodo }: Props) {
    const todoCheckedHandler = (item: Todo) => {
        let v = true
        if (item.isChecked()) { v = false }
        item.setChecked(v)

        UpdateTodo(item)
    }
    const getTodoList = todos.map((item) => {
        return (
            <TodoItem
                onTodoCheck={todoCheckedHandler}
                todo={item}
                key={item.getId()}
            />
        )
    })
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
                    <div className="list mt-5">{getTodoList}</div>
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
