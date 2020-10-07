// 1. imports
import { useSelector, useDispatch } from "react-redux"
// import axios from "axios"

// 2. action definitions
const EXAMPLE_SYNC = "example/EXAMPLE_SYNC"
const EXAMPLE_ASYNC = "example/EXAMPLE_ASYNC"

const ADD_TODO = "todo/ADD_TODO"

// 3. initial state
const initialState = {
  example: null,
  list: [],
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
    case EXAMPLE_ASYNC:
      return {
        ...state,
        list: action.payload,
      }
    case EXAMPLE_SYNC:
      return {
        ...state,
        example: action.payload,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: generateId(), input: action.payload }],
      }

    default:
      return state
  }
}

// 5. action creators
// async action...
function doExample(text) {
  return {
    type: EXAMPLE_SYNC,
    payload: text,
  }
}

function addListItem(input) {
  return {
    type: ADD_TODO,
    payload: input,
  }
}

// 5. async action...
function doExampleAsync() {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({ type: EXAMPLE_ASYNC, payload: ["foo", "bar", "baz"] })
    }, 5000)
  }
}

// 6. custom hook
export function useExample() {
  const dispatch = useDispatch()
  const example = useSelector((app) => app.exampleState.example)
  const list = useSelector((app) => app.exampleState.list)
  const setExample = (text) => dispatch(doExample(text))
  const exampleAsync = () => dispatch(doExampleAsync())

  return {
    example,
    setExample,
    exampleAsync,

    list,
  }
}
