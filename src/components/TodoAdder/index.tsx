import { ArrowNarrowRight } from 'heroicons-react'
import React from 'react'
import { connect } from 'react-redux'
import { Todo } from '../../store/todo'
import { AddTodo } from '../../store/todo/actions'
import Logo from '../logo'
import Dates from './Dates'

const mapDispatchToProps = { AddTodo }

type Props = {
    AddTodo: typeof AddTodo
}
let selectedDate = new Date()

function TodoAdder({ AddTodo }: Props) {
    const titleInput = React.createRef<HTMLInputElement>()
    const [value, setValue] = React.useState('')
    // function randomDate(start: Date, end: Date) {
    //     return new Date(
    //         start.getTime() + Math.random() * (end.getTime() - start.getTime())
    //     )
    // }
    // randomDate(new Date(2020, 11, 15), new Date())

    const addTodoHandler = (): void => {
        AddTodo(new Todo(value, '', selectedDate))
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
    const onDateChange = (date: Date): void => {
        selectedDate = date
    }

    return (
        <div className="p-5 md:w-1/2 relative">
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
            <div>
                <Dates onDateChange={onDateChange} />
            </div>
        </div>
    )
}

export default connect(null, mapDispatchToProps)(TodoAdder)
