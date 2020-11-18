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
let isDragging = false
let openStyle = { top: '50px' }
let opened = false
let policy = 0
let closeStyle = () => {
    return {
        top: window.innerHeight - 60 + 'px',
    }
}

function TodoList({ todos }: Props) {
    const groups = groupBy(todos, (todo: Todo) =>
        dayjs(todo.getDueDate()).format('DD-MM-YYYY')
    )
    const [style, setStyle] = React.useState<any>(closeStyle)
    const dragStart = (e: any) => {
        isDragging = true
        policy = e.touches[0].screenY - parseInt(style.top)
    }
    const onDragging = (e: any): void => {
        console.log(e)
        if (isDragging)
            setStyle({
                top: e.touches[0].screenY - policy + 'px',
            })
    }

    const onDragEnd = (): void => {
        if (isDragging) {
            isDragging = false
            if (!opened)
                if (
                    parseInt(style.top) <
                    window.innerHeight / 2 + window.innerHeight / 4
                ) {
                    opened = true
                    setStyle(openStyle)
                } else {
                    setStyle(closeStyle())
                }
            else if (parseInt(style.top) > window.innerHeight / 4) {
                opened = false
                setStyle(closeStyle())
            } else {
                setStyle(openStyle)
            }
            policy = 0
        }
    }
    return (
        <div
            className="md:w-1/2 md:static timeline absolute transition-all duration-200 ease-out"
            style={style}
        >
            <div className=" h-full p-5">
                <div className=" rounded-2xl md:pt-10 h-full bg-white">
                    <div
                        className="line visible md:hidden mb-4 pt-4 pb-4"
                        onTouchStart={dragStart}
                        onTouchMove={onDragging}
                        onTouchEnd={onDragEnd}
                    >
                        <div className="w-20 rounded-md bg-gray-500 h-2 m-auto "></div>
                    </div>
                    <div className="p-1 pr-10 pl-10 pb-10">
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
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
