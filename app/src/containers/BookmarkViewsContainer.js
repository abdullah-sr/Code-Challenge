// @flow
import React from 'react';
import { connect } from 'react-redux';
import RNGooglePlaces from 'react-native-google-places';
import BookmarksView from '../components/BookmarksView';
import type { Place } from '../types';

type Props = {
    bookmarks: Array<Place>,
};

class RegisterViewContainer extends React.Component<Props> {
    pushSearchPlaceModal = async () => {
        try {
            // restrict search to US only
            const place = await RNGooglePlaces.openAutocompleteModal({ country: 'US' });
            console.log(place);
        } catch (error) {
            // this block executes when user backs out without selecting a place
            console.log(error);
        }
    };

    render() {
        return (
            <BookmarksView
                bookmarks={this.props.bookmarks}
                onPressAddNewPlace={this.pushSearchPlaceModal}
            />
        );
    }
}


const mapStateToProps = ({ bookmarks }) => ({ bookmarks });

export default connect(mapStateToProps)(RegisterViewContainer);
