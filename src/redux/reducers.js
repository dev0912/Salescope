import {
    combineReducers
} from 'redux';

import {
    routerReducer
} from 'react-router-redux';

import tab from './reducers/tab';

export default combineReducers({
    routing: routerReducer,
    tab
})
