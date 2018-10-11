// @flow
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import BookmarkViewsContainer from './containers/BookmarkViewsContainer';
import store from './store';

function startApp() {
    Navigation.registerComponentWithRedux('BookmarkViewsContainer', () => BookmarkViewsContainer, Provider, store);
    Navigation.events()
        .registerAppLaunchedListener(() => {
            Navigation.setRoot({
                root: {
                    component: {
                        name: 'BookmarkViewsContainer'
                    }
                }
            });
        });
}

export default startApp;
