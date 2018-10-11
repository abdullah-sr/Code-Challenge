// @flow
import { ADD_PLACE } from '../constants/actionTypes';
import type { BookmarksState, Action, Place } from '../types';

export default (state: BookmarksState = {}, action: Action): BookmarksState => {
    switch (action.type) {
        case ADD_PLACE:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};


// takes the state and transforms it into a shape that's easier for the views to digest
// todo: use reselct
export const getBookmarksAsList = (bookmarks: BookmarksState): Array<Place> => Object.values(bookmarks);
