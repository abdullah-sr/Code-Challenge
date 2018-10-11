// @flow
import axios from 'axios';
import Config from 'react-native-config';


/**
 * Fetch place photo
 *
 * @param placeID: string
 * @returns Promise<string>
 */
export const fetchPlaceImage = async (placeID: string) => {
    try {
        // this returns details about the place including a list of photos
        const { data } = await axios({
            method: 'GET',
            url: 'https://maps.googleapis.com/maps/api/place/details/json',
            params: {
                placeid: placeID,
                key: Config.GOOGLE_MAPS_API_KEY,
            }
        });
        if (data.result.photos) {
            // just get whatever the first photo is
            const photoReference = data.result.photos[0].photo_reference;
            return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${Config.GOOGLE_MAPS_API_KEY}`;
        }
        return ''; // place has no photos
    } catch (error) {
        // todo: return instead of loggin so UI can react to it
        console.log(error);
    }
};
