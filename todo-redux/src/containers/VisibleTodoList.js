import {connect} from  'react-redux'
import {toggleTodo} from "../actions/index";
import TodoList from '../components/TodoList'
import {VisibilityFilters as FILTERS} from "../actions";

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FILTERS.SHOW_ALL:
            return todos;
        case FILTERS.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case FILTERS.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => ({
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
);

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList