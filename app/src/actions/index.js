// @flow
import { ADD_PLACE } from '../constants/actionTypes';
import type { AddPlaceAction, Place } from '../types';

export const addPlace = (place: Place): AddPlaceAction => {
    const { placeID } = place;
    place.bookmarked = false; // not bookmarked when user adds a new place
    return {
        type: ADD_PLACE,
        payload: {
            [placeID]: place
        }
    };
};
