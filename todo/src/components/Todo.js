import React from "react"
export default function Todo(props) {
  return (
    <>
      <li className="todo-item">
        <div className="checkbox"></div>
        {props.content}
      </li>
    </>
  )
}
