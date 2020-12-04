import React from "react"

// import Todo from "../components/Todo"

export default function Todo(props) {
  return (
    <>
      <li className="todo-item todo-container">
        <div>
          <input
            type="checkbox"
            className="completebox"
            onClick={props.onMarkComplete}
          ></input>
          {/* NEED CLASS TO ADD LINE THROUGH IF TODO IS COMPLETE */}
          <label className={props.complete === true ? "complete" : ""}>
            {props.content}
          </label>
        </div>
        <button className="deletebox" onClick={props.onDelete}>
          X
        </button>
      </li>
    </>
  )
}
