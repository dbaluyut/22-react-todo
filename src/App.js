import React from 'react'
import { Provider } from 'react-redux'
import './App.css'
import store from './store.js'
import TodoApp from './components/TodoApp'

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

export default App
