import React from 'react'
import './App.css'
import TodoAdder from './components/TodoAdder'
import TodoList from './components/TodoList'

function App() {
    return (
        <div className="App md:flex bg-black-blue h-full md:justify-between">
            <TodoAdder />
            <TodoList />
        </div>
    )
}

export default App
