// @flow
import { combineReducers, type CombinedReducer } from 'redux';
import type { Place } from '../types';

// todo: define types

const bookmarks = (state: Array<Place> = [], action): Array<Place> => {
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
