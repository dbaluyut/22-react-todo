// 1. imports
import { useSelector, useDispatch } from "react-redux"
// import axios from "axios"

// 2. action definitions

const ADD_TODO = "todo/ADD_TODO"
const DELETE_TODO = "todo/DELETE_TODO"
const COMPLETE_TODO = "todo/COMPLETE_TODO"

// 3. initial state
const initialState = {
  todos: [],
}

function generateId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: generateId(), input: action.payload, complete: false },
        ],
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      }

    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.complete = !todo.complete
          }
          return todo
        }),
      }

    default:
      return state
  }
}

// 5. action creators
// async action...

function addListItem(input) {
  return {
    type: ADD_TODO,
    payload: input,
  }
}

function deleteListItem(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  }
}

function completeListItem(id) {
  let complete = ADD_TODO.complete
  if (complete === false) {
    return {
      complete: true,
      type: COMPLETE_TODO,
      payload: id,
    }
  } else {
    return {
      complete: false,
      type: COMPLETE_TODO,
      payload: id,
    }
  }
}

// 6. custom hook
export function useTodo() {
  const dispatch = useDispatch()

  // todos
  const todos = useSelector((app) => app.todoState.todos)
  const addTodo = (input) => dispatch(addListItem(input))
  const deleteTodo = (id) => dispatch(deleteListItem(id))
  const completedTodos = todos.filter((todo) => todo.complete === true)
  const activeTodos = todos.filter((todo) => !todo.complete)
  const completeTodo = (id) => dispatch(completeListItem(id))

  return {
    todos,
    deleteTodo,
    addTodo,
    completedTodos,
    completeTodo,
    activeTodos,
  }
}
