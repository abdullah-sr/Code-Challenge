// @flow
import { ADD_PLACE, FETCH_PLACE_IMAGE, TOGGLE_BOOKMARK } from '../constants/actionTypes';
import type { Place, Dispatch, ToggleBookmarkAction } from '../types';
import * as api from '../api';

export const fetchPlaceImage = (placeID: string) => async (dispatch: Dispatch) => {
    const image = await api.fetchPlaceImage(placeID);
    dispatch({
        type: FETCH_PLACE_IMAGE,
        payload: {
            placeID,
            image,
        },
    });
};

export const addPlace = (place: Place) => (dispatch: Dispatch) => {
    const { placeID } = place;
    // set default values for bookmarked and image
    place.bookmarked = false;
    place.image = '';
    dispatch(fetchPlaceImage(placeID));
    dispatch({
        type: ADD_PLACE,
        payload: {
            [placeID]: place
        }
    });
};

export const toggleBookmark = (placeID: string): ToggleBookmarkAction => {
    return {
        type: TOGGLE_BOOKMARK,
        payload: placeID
    };
};
