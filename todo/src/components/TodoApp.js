import React from "react"
import { useExample } from "../hooks"
import Todo from "./Todo"

export default () => {
  const { example, setExample, exampleAsync, list } = useExample()
  return (
    <div>
      <h2>{example}</h2>
      <button onClick={() => setExample("foo")}>Example sync</button>
      <button onClick={exampleAsync}>Example async</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

      {/* MY CODE */}

      <div className="todo-list">
        <h1>todos</h1>
        <form
          onSubmit={function (e) {
            e.preventDefault()
            console.log(e.target.value)
          }}
        >
          <input type="text" placeholder="what needs to be done" />
        </form>
        <ul>
          <Todo content="item 1" />
          {/* <li className="todo-item">
            <div className="checkbox"></div>item 1
          </li> */}
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
