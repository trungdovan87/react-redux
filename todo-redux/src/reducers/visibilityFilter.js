import {ACTION_TYPE as TYPE, VisibilityFilters} from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
        case TYPE.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
}

export default visibilityFilter;