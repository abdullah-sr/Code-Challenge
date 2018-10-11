// @flow
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import BookmarksViewContainer from './containers/BookmarksViewContainer';
import PlaceViewContainer from './containers/PlaceViewContainer';
import store from './store';
import { Bookmarks, PlaceDetails } from './constants/screenNames';

const SCREENS = {
    [Bookmarks]: BookmarksViewContainer,
    [PlaceDetails]: PlaceViewContainer,
};

function setNavigationDefaults() {
    Navigation.setDefaultOptions({
        layout: {
            orientation: ['portrait'], // An array of supported orientations
            backgroundColor: '#fff'
        },
        topBar: {
            title: {
                color: '#030303',
                alignment: 'center',
            },
            background: {
                transparent: true,
                color: 'transparent',
            },
            elevation: 0,
            drawBehind: false,
        }
    });
}

function setNavigationRoot() {
    // create a stack based navigation
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: Bookmarks
                        }
                    }
                ],
            }
        }
    });
}

function startApp() {
    for (const screenName in SCREENS) {
        // register screens with the navigation library
        Navigation.registerComponentWithRedux(screenName, () => SCREENS[screenName], Provider, store);
    }
    setNavigationDefaults();
    Navigation.events().registerAppLaunchedListener(setNavigationRoot);
}

export default startApp;
