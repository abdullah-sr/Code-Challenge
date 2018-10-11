// @flow
import { combineReducers, type CombinedReducer } from 'redux';

// todo: define types

const bookmarks = (state: Array<Object> = [], action): Array<Object> => {
    switch (action.type) {
        default:
            return state;
    }
};

// Root Reducer
const rootReducer: CombinedReducer<Object, Object> = combineReducers({
    bookmarks
});

export default rootReducer;
