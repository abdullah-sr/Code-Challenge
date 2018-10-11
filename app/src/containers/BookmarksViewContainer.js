// @flow
import React from 'react';
import { connect } from 'react-redux';
import RNGooglePlaces from 'react-native-google-places';
import debounce from 'lodash.debounce';
import BookmarksView from '../components/BookmarksView';
import type { Place } from '../types';

type Props = {
    bookmarks: Array<Place>,
};

class BookmarksViewContainer extends React.Component<Props> {
    // opens up the search modal
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

    // debounce the event to prevent the modal from appearing multiple times in case of fast clicks
    debouncdPush = debounce(this.pushSearchPlaceModal, 300);

    render() {
        return (
            <BookmarksView
                bookmarks={this.props.bookmarks}
                onPressAddNewPlace={this.debouncdPush}
            />
        );
    }
}


const mapStateToProps = ({ bookmarks }) => ({ bookmarks });

export default connect(mapStateToProps)(BookmarksViewContainer);
