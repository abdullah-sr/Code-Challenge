// @flow
import { Navigation } from 'react-native-navigation';
import BookmarkView from './components/BookmarkView';

function startApp() {
    Navigation.registerComponent('BookmarkView', () => BookmarkView);
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
