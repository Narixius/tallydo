import { groupBy } from 'lodash'
import React, { forwardRef } from 'react'
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
    forwardedRef: any
}
let isDragging = false
let openStyle = { top: '50px' }
let opened = true
let policy = 0

let closeStyle = () => {
    return {
        top: window.innerHeight - 60 + 'px',
    }
}

function TodoList({ todos, forwardedRef }: Props) {
    const groups = groupBy(todos, (todo: Todo) =>
        dayjs(todo.getDueDate()).format('DD-MM-YYYY')
    )
    const [style, setStyle] = React.useState<any>(openStyle)

    const dragStart = (e: any) => {
        isDragging = true
        policy = e.touches[0].screenY - parseInt(style.top)
    }
    const onDragging = (e: any): void => {
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
                    openTimeline()
                } else {
                    closeTimeline()
                }
            else if (parseInt(style.top) > window.innerHeight / 4) {
                closeTimeline()
            } else {
                openTimeline()
            }
            policy = 0
        }
    }
    const openTimeline = (): void => {
        opened = true
        setStyle(openStyle)
    }
    const closeTimeline = (): void => {
        opened = false
        setStyle(closeStyle())
    }
    const mouseHandler = (): void => {
        if (!opened) openTimeline()
        else closeTimeline()
    }
    forwardedRef.current = mouseHandler
    return (
        <div
            className="md:w-1/2 w-full md:static timeline absolute transition-all duration-200 ease-out"
            style={style}
        >
            <div className=" h-full p-5 ">
                <div className=" rounded-2xl md:pt-10 h-full bg-white">
                    <div
                        className="line visible md:hidden mb-2 pt-4 pb-2"
                        onTouchStart={dragStart}
                        onTouchMove={onDragging}
                        onTouchEnd={onDragEnd}
                        onMouseDown={mouseHandler}
                    >
                        <div className="w-20 rounded-md bg-gray-500 h-2 m-auto "></div>
                    </div>
                    <div className="p-1 pr-10 pl-10 pb-10">
                        <h2 className="text-black-blue font-bold text-xl md:text-2xl">
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

const Comp = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default forwardRef((props, ref: any) => {
    return <Comp {...props} forwardedRef={ref} />
})
