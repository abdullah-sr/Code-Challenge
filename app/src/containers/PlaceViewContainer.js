// @flow
import React from 'react';
import { connect } from 'react-redux';
import PlaceView from '../components/PlaceView';
import type { Place } from '../types';

type Props = {
    place: Place,
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
        return (
            <PlaceView place={this.props.place}/>
        );
    }
}


export default connect(null)(PlaceViewContainer);
