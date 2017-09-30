import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux'
import reducer from './reducers'

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App title={"TODO LIST"}/>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();


console.log(store.getState());
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

// Dispatch some actions
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ALL));

// Stop listening to state updates
unsubscribe();

