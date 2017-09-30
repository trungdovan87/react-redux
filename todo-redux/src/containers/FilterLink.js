import {connect} from 'react-redux'
import {setVisibilityFilter} from "../actions/index";
import Link from '../components/Link'

const mapStateToProps = (state, props) => ({
        active: props.filter === state.visibilityFilter
    });

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(props.filter))
    }
});

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default FilterLink