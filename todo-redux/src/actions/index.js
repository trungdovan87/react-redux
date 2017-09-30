let nextTodoId = 0;
export const ACTION_TYPE = {
    ADD_TODO: 'ADD_TODO',
    SET_VISIBILITY_FILTER: 'SET_VISIBILITY_FILTER',
    TOGGLE_TODO: 'TOGGLE_TODO'
};

export const VisibilityFilters = {
    SHOW_ALL: "SHOW_ALL",
    SHOW_COMPLETED: "SHOW_COMPLETED",
    SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const addTodo = (text) => ({
    type: ACTION_TYPE.ADD_TODO,
    id: nextTodoId++,
    text
});

export const setVisibilityFilter = (filter) => ({
    type: ACTION_TYPE.SET_VISIBILITY_FILTER,
        filter
});

export const toggleTodo = (id) => ({
    type: ACTION_TYPE.TOGGLE_TODO,
    id
});

