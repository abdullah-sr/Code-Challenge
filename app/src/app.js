// @flow
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import BookmarkView from './components/BookmarkView';
import store from './store';

function startApp() {
    Navigation.registerComponentWithRedux('BookmarkView', () => BookmarkView, Provider, store);
    Navigation.events()
        .registerAppLaunchedListener(() => {
            Navigation.setRoot({
                root: {
                    component: {
                        name: 'BookmarkView'
                    }
                }
            });
        });
}

export default startApp;
