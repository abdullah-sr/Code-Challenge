// @flow
import { ADD_PLACE, FETCH_PLACE_IMAGE, TOGGLE_BOOKMARK } from './constants/actionTypes';

export type Place = {
    placeID: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    bookmarked: boolean,
    image: string,
};

export type AddPlaceAction = {
    |type: ADD_PLACE,
    payload: {
        [string]: Place
    } |
}

export type ToggleBookmarkAction = {
    |type: TOGGLE_BOOKMARK,
    payload: string |
}

export type FetchPlaceImageAction = {
    |type: FETCH_PLACE_IMAGE,
    payload: {
        placeID: string,
        image: string,
    } |
};

// an object of places where every key is the place id
export type BookmarksState = {
    [string]: Place
}

// how global state should look like
export type GlobalState = {
    'bookmarks': BookmarksState
}

// the types of actions redux reducers accept
export type Action = AddPlaceAction | ToggleBookmarkAction | FetchPlaceImageAction;

export type Dispatch = (Action) => mixed;
