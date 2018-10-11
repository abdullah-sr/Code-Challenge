// @flow
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
} from 'react-native';
import Text from '../shared/Text';
import Button from '../shared/Button';
import type { Place } from '../../types';

type Props = {
    place: Place,
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        marginBottom: -20,
        backgroundColor: '#ddd',
    },
    detailsPanel: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20,
    },
    bookmarkButton: {
        width: '70%',
    }
});

const PlaceView = (props: Props) => (
    <SafeAreaView style={styles.safeAreaView}>
        <Image
            style={styles.image}
            source={{ uri: '' }}
        />
        <View style={styles.detailsPanel}>
            <Text size={18} mb={8} fontWeight="400">{props.place.name}</Text>
            <Text mb={30}>{props.place.address}</Text>
            <Button
                containerStyle={styles.bookmarkButton}
                title={props.place.bookmarked ? 'Bookmarked' : 'Bookmark'}
                success={props.place.bookmarked}
            />
        </View>
    </SafeAreaView>
);

export default PlaceView;
