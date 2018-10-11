// @flow
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import BookmarksList from './BookmarksList';
import AddNewPlaceButton from './AddNewPlaceButton';

type Props = {
    bookmarks: Array<Object>
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
            <BookmarksList/>
            <AddNewPlaceButton containerStyle={styles.addNewPlaceButton}/>
        </View>
    </SafeAreaView>
);

export default BookmarkView;
