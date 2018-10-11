// @flow
import { ADD_PLACE } from '../constants/actionTypes';
import type { AddPlaceAction, Place } from '../types';

export const addPlace = (place: Place): AddPlaceAction => {
    const { placeID } = place;
    return {
        type: ADD_PLACE,
        payload: {
            [placeID]: place
        }
    };
};
