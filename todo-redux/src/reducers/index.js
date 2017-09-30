// import {combineReducers} from 'redux'
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}

// const todoApp = combineReducers({
//     visibilityFilter,
//     todos
// })
//
// export default todoApp
