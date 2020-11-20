import React from 'react'
import './App.css'
import TodoAdder from './components/TodoAdder'
import TodoList from './components/TodoList'

function App() {
    const todoListRef = React.useRef<any>()
    const onTimelineControllerClicked = () => {
        todoListRef.current()
    }
    return (
        <div className="App md:flex bg-black-blue h-full md:justify-between">
            <TodoAdder
                onTimelineControllerClicked={onTimelineControllerClicked}
            />
            <TodoList ref={todoListRef} />
        </div>
    )
}

export default App
