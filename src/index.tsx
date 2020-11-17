import React from 'react'
import reactDom from 'react-dom'
import { Provider } from 'react-redux'
import { compose, createStore } from 'redux'
import { rootState } from './store'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const composeEnhancers =
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose

const store = createStore(rootState, composeEnhancers)

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
