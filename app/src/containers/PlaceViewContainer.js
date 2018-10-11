// @flow
import React from 'react';
import { connect } from 'react-redux';
import PlaceView from '../components/PlaceView';
import type { BookmarksState, Place } from '../types';
import { toggleBookmark } from '../actions';

type Props = {
    placeID: string,
    bookmarks: Array<Place>,
    toggleBookmark: (string) => BookmarksState
};

class PlaceViewContainer extends React.Component<Props> {
    static get options() {
        return {
            topBar: {
                drawBehind: true,
            }
        };
    }

    render() {
        const {
            bookmarks,
            placeID,
        } = this.props;
        return (
            <PlaceView
                place={bookmarks[placeID]}
                onPressBookmark={this.props.toggleBookmark}
            />
        );
    }
}

const mapStateToProps = ({ bookmarks }) => ({ bookmarks });

export default connect(mapStateToProps, { toggleBookmark })(PlaceViewContainer);
