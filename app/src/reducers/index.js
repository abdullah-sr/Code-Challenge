// @flow
import { combineReducers, type CombinedReducer } from 'redux';

import bookmarks from './bookmarks';
import type { GlobalState, Action } from '../types';

// Root Reducer
const rootReducer: CombinedReducer<GlobalState, Action> = combineReducers({
    bookmarks
});

export default rootReducer;
