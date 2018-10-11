// @flow
import React from 'react';
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';
import Text from '../shared/Text';
import Button from '../shared/Button';
import type { Place } from '../../types';

type Props = {
    bookmarks: Array<Place>,
    onPressAddNewPlace: () => mixed,
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    image: {
        flex: 1,
        marginBottom: -20,
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
        width: '60%',
    }
});

const PlaceView = (props: Props) => (
    <SafeAreaView style={styles.safeAreaView}>
        <Image
            style={styles.image}
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        />
        <View style={styles.detailsPanel}>
            <Text size={18} mb={8} fontWeight="400">Royals Hot Chicken</Text>
            <Text mb={30}>736 E Market St.Louisville, KY 40202</Text>
            <Button
                containerStyle={styles.bookmarkButton}
                title="Bookmark"
            />
        </View>
    </SafeAreaView>
);

export default PlaceView;
