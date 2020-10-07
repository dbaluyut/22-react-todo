import React from "react"
import { useTodo } from "../hooks"
// import Todo from "../components/Todo"

export default function Todo(props) {
  const { todos, deleteTodo } = useTodo()
  return (
    <>
      <li className="todo-item">
        <button className="checkbox" onClick={props.onClick}>
          X
        </button>
        {props.content}
      </li>
    </>
  )
}
