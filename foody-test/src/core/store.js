import { createStore, applyMiddleware, combineReducers } from 'redux';

export default createStore(
    combineReducers({
        detailsReducer
    }),
    applyMiddleware(promiseMiddleware));