import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';


const initialState = {
    bookmarks: [{
        placeID: 'ChIJZa6ezJa8j4AR1p1nTSaRtuQ',
        website: 'https://www.facebook.com/',
        phoneNumber: '+1 650-543-4800',
        address: '1 Hacker Way, Menlo Park, CA 94025, USA',
        name: 'Facebook HQ',
        types: ['street_address', 'geocode'],
        latitude: 37.4843428,
        longitude: -122.14839939999999
    }]
};
let middleware = [thunk];

if (__DEV__) {
    // middleware to be applied in debug mode only
    middleware = [...middleware, logger];
}

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;
