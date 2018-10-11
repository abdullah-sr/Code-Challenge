// @flow
import { ADD_PLACE, TOGGLE_BOOKMARK } from '../constants/actionTypes';
import type { BookmarksState, Action, Place } from '../types';

export default (state: BookmarksState = {}, action: Action): BookmarksState => {
    switch (action.type) {
        case ADD_PLACE:
            return { ...state, ...action.payload };
        case TOGGLE_BOOKMARK: {
            const placeID = action.payload;
            const place = { ...state[placeID] };
            place.bookmarked = !place.bookmarked;
            return { ...state, ...{ [placeID]: place } };
        }
        default:
            return state;
    }
};


// takes the state and transforms it into a shape that's easier for the views to digest
// todo: use reselct
export const getBookmarksAsList = (bookmarks: BookmarksState): Array<Place> => Object.values(bookmarks);
