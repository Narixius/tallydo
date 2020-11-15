import { ArrowNarrowRight } from 'heroicons-react'
import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/index'
import { Todo, TodoArray } from '../../redux/todo'
import { AddTodo } from '../../redux/todo/actions'
import Logo from '../logo'

const mapStateToProps = ({ todos }: RootState) => {
    return { todos }
}
const mapDispatchToProps = { AddTodo }

type Props = {
    AddTodo: typeof AddTodo
    todos: TodoArray
}

function TodoAdder({ AddTodo, todos }: Props) {
    const titleInput = React.createRef<HTMLInputElement>()
    const [value, setValue] = React.useState('')

    const AddTodoHandler = (): void => {
        AddTodo(new Todo(value, '', false))
        setValue('')
        titleInput.current!.value = ''
    }

    const onTodoTitleChanged = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setValue(e.target.value)
    }
    const onTodoTitleKeyUp = (
        e: React.KeyboardEvent<HTMLInputElement>
    ): void => {
        if (e.key === 'Enter') {
            AddTodoHandler()
        }
    }
    const getTodoList = todos.map((item) => {
        return <p className="text-white">{item.getTitle()}</p>
    })
    return (
        <div className="bg-black-blue lg:p-5">
            <Logo />
            <h2 className="text-3xl font-bold text-white lg:mt-10">
                What’s you plan to do?
            </h2>
            <p className="text-gray-500 font-medium text-sm lg:mt-2">
                Add you plan, so you never forget the works!
            </p>
            <div className="inputfields mt-8">
                <input
                    ref={titleInput}
                    type="text"
                    className="px-4 py-3 rounded-md font bg-white bg-opacity-25 text-gray-100 w-full focus:outline-none placeholder-gray-400"
                    placeholder="Shopping...?!"
                    onChange={onTodoTitleChanged}
                    onKeyUp={onTodoTitleKeyUp}
                />
                <div className="flex flex-row-reverse w-full mt-4">
                    <button
                        onClick={AddTodoHandler}
                        className="add font-medium flex text-gray-800 px-3 py-1 rounded-md bg-white focus:outline-none"
                    >
                        Add
                        <ArrowNarrowRight />
                    </button>
                </div>
            </div>
            {getTodoList}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdder)
