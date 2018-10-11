// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import RNGooglePlaces from 'react-native-google-places';
import debounce from 'lodash.debounce';
import BookmarksView from '../components/BookmarksView';
import type { AddPlaceAction, Place } from '../types';
import { addPlace } from '../actions';
import { getBookmarksAsList } from '../reducers/bookmarks';
import { PlaceDetails } from '../constants/screenNames';

type Props = {
    componentId: string,
    bookmarks: Array<Place>,
    addPlace: (Place) => AddPlaceAction
};

class BookmarksViewContainer extends React.Component<Props> {
    static get options() {
        return {
            topBar: {
                title: {
                    text: 'Bookmarks',
                },
            }
        };
    }

    // opens up the search modal
    // debounce the event to prevent the modal from appearing multiple times in case of fast clicks
    pushSearchPlaceModal = debounce(async () => {
        try {
            // restrict search to US only
            const place = await RNGooglePlaces.openAutocompleteModal({ country: 'US' });
            this.props.addPlace(place);
        } catch (error) {
            // this block executes when user backs out without selecting a place
            console.log(error);
        }
    }, 300);

    pushPlaceScreen = debounce((place: Place) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: PlaceDetails,
                passProps: {
                    place
                }
            }
        });
    }, 300);


    render() {
        return (
            <BookmarksView
                bookmarks={this.props.bookmarks}
                onPressAddNewPlace={this.pushSearchPlaceModal}
                onPressBookmark={this.pushPlaceScreen}
            />
        );
    }
}


const mapStateToProps = ({ bookmarks }) => ({ bookmarks: getBookmarksAsList(bookmarks) });

export default connect(mapStateToProps, { addPlace })(BookmarksViewContainer);
