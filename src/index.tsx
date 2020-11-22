import React from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import { rootState } from './store'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

import { defaultTags } from './store/tag/index'
import { defaultTodos } from './store/todo/index'

const composeEnhancers =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose

const store = createStore(
    rootState,
    {
        todos: defaultTodos,
        tags: defaultTags,
    },
    composeEnhancers
)

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

reportWebVitals()
