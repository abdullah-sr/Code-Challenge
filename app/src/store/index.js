import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const initialState = {};
let middleware = [thunk];

if (__DEV__) {
    // middleware to be applied in debug mode only
    middleware = [...middleware, logger];
}

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
