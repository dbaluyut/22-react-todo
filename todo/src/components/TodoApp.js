import React, { useState } from "react"
import { useTodo } from "../hooks"
import Todo from "../components/Todo"

export default () => {
  const [inputText, setInputText] = useState("")
  const { todos, addTodo, deleteTodo } = useTodo()

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(inputText)
    setInputText("")
  }

  return (
    <div>
      <div className="todo-list">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="what needs to be done"
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              id={todo.id}
              content={todo.input}
              onClick={() => deleteTodo(todo.id)}
            />
          ))}
        </ul>
        <div className="footer-area">
          <li>items left</li>
          <div>
            <button>all</button>
            <button>active</button>
            <button>completed</button>
          </div>
          <li>clear completed</li>
        </div>
      </div>
    </div>
  )
}
