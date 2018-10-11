// @flow
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import BookmarksViewContainer from './containers/BookmarksViewContainer';
import PlaceViewContainer from './containers/PlaceViewContainer';
import store from './store';

const SCREENS = {
    Bookmarks: BookmarksViewContainer,
    PlaceDetails: PlaceViewContainer,
};


function startApp() {
    for (const screenName in SCREENS) {
        // register screens with the navigation library
        Navigation.registerComponentWithRedux(screenName, () => SCREENS[screenName], Provider, store);
    }
    Navigation.events().registerAppLaunchedListener(() => {
        // create a stack based navigation
        Navigation.setRoot({
            root: {
                stack: {
                    children: [
                        {
                            component: {
                                name: 'Bookmarks'
                            }
                        }
                    ],
                }
            }
        });
    });
}

export default startApp;
