import { ArrowNarrowRight } from 'heroicons-react'
import React from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/index'
import { Todo, TodoArray } from '../../redux/todo'
import { AddTodo } from '../../redux/todo/actions'
import Logo from '../logo'

const mapDispatchToProps = { AddTodo }

type Props = {
    AddTodo: typeof AddTodo
}

function TodoAdder({ AddTodo }: Props) {
    const titleInput = React.createRef<HTMLInputElement>()
    const [value, setValue] = React.useState('')

    const addTodoHandler = (): void => {
        AddTodo(new Todo(value, '', new Date()))
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
            addTodoHandler()
        }
    }

    return (
        <div className="p-5 md:w-1/2">
            <Logo />
            <h2 className="text-3xl font-bold text-white lg:mt-10 mt-5">
                What’s you plan to do?
            </h2>
            <p className="text-gray-500 font-medium text-sm lg:mt-2 mt-1">
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
                        onClick={addTodoHandler}
                        className="add font-medium flex text-gray-800 px-3 py-1 rounded-md bg-white focus:outline-none"
                    >
                        Add
                        <ArrowNarrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(TodoAdder)
