import {ACTION_TYPE as TYPE} from '../actions'

const todos = (state = [], action) => {
    switch (action.type) {
        case TYPE.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TYPE.TOGGLE_TODO:
            return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
};

export default todos