// @flow
import { ADD_PLACE } from './constants/actionTypes';

export type Place = {
    placeID: string,
    name: string,
    address: string,
    latitude: number,
    longitude: number,
    bookmarked: boolean,
};

export type AddPlaceAction = {
    type: ADD_PLACE,
    payload: {
        [string]: Place
    }
}

// an object of places where every key is the place id
export type BookmarksState = {
    [string]: Place
}

// how global state should look like
export type GlobalState = {
    'bookmarks': BookmarksState
}

// the types of actions redux reducers accept
export type Action = AddPlaceAction;
