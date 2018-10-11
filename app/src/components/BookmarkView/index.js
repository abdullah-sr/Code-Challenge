// @flow
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import BookmarksList from './BookmarksList';
import AddNewPlaceButton from './AddNewPlaceButton';
import type { Place } from '../../types';

type Props = {
    bookmarks: Array<Place>,
    onPressAddNewPlace: () => mixed,
};

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 20,
    },
    addNewPlaceButton: {
        marginTop: 'auto',
    }
});

const BookmarkView = (props: Props) => (
    <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.rootContainer}>
            <BookmarksList bookmarks={props.bookmarks}/>
            <AddNewPlaceButton
                containerStyle={styles.addNewPlaceButton}
                onPress={props.onPressAddNewPlace}
            />
        </View>
    </SafeAreaView>
);

export default BookmarkView;
