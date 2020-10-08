import React, { useState } from "react"
import { useTodo } from "../hooks"
import Todo from "../components/Todo"

export default () => {
  const [inputText, setInputText] = useState("")
  const {
    todos,
    addTodo,
    deleteTodo,
    completedTodos,
    completeTodo,
    activeTodos,
    clearCompletedList,
  } = useTodo()
  const [viewState, setViewState] = useState("default")

  function handleSubmit(e) {
    e.preventDefault()
    addTodo(inputText)
    setInputText("")
  }

  function handleClickDefaultView() {
    setViewState("default")
  }

  const defaultView = todos.map((todo) => (
    <Todo
      complete={todo.complete}
      id={todo.id}
      key={todo.id}
      content={todo.input}
      onDelete={() => deleteTodo(todo.id)}
      onMarkComplete={() => completeTodo(todo.id)}
    />
  ))

  function handleClickActiveView() {
    setViewState("active")
  }

  const activeView = activeTodos.map((todo) => (
    <Todo
      complete={todo.complete}
      id={todo.id}
      key={todo.id}
      content={todo.input}
      onDelete={() => deleteTodo(todo.id)}
      onMarkComplete={() => completeTodo(todo.id)}
    />
  ))

  function handleClickCompletedView() {
    setViewState("completed")
  }

  const completedView = completedTodos.map((todo) => (
    <Todo
      complete={todo.complete}
      id={todo.id}
      key={todo.id}
      content={todo.input}
      onDelete={() => deleteTodo(todo.id)}
      onMarkComplete={() => completeTodo(todo.id)}
    />
  ))

  return (
    <div>
      <div className="todo-list">
        <h1>
          to<span className="highlight">dos</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="what needs to be done"
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <ul>
          {viewState === "default" ? defaultView : null}
          {viewState === "active" ? activeView : null}
          {viewState === "completed" ? completedView : null}

          {/* {todos.map((todo) => (
            <Todo
              complete={todo.complete}
              id={todo.id}
              key={todo.id}
              content={todo.input}
              onDelete={() => deleteTodo(todo.id)}
              onMarkComplete={() => completeTodo(todo.id)}
            />
          ))} */}
        </ul>
        <div className="footer-area">
          <li>{activeTodos.length} items left</li>
          <div>
            <button className="view-btn" onClick={handleClickDefaultView}>
              all
            </button>
            <button className="view-btn" onClick={handleClickActiveView}>
              active
            </button>
            {/* SHOW COMPLETED LIST OF TODOS, ARRAY IS STORED IN COMPLETEDTODOS */}
            <button className="view-btn" onClick={handleClickCompletedView}>
              completed
            </button>
          </div>
          <button>clear completed</button>
        </div>
      </div>
    </div>
  )
}
