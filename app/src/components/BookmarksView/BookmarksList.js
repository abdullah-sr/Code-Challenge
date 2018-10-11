// @flow
import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import BookmarkItem from './BookmarkItem';
import Text from '../shared/Text';
import type { Place } from '../../types';

const styles = StyleSheet.create({
    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

type Props = {
    bookmarks: Array<Place>
};

const renderBookmarkItem = ({ item }: { item: Place }) => <BookmarkItem key={item.placeID} item={item}/>;

const keyExctractor = (item: Place) => item.placeID;

const BookmarksList = (props: Props) => (
    props.bookmarks.length === 0
        ? (
            <View style={styles.textContainer}>
                <Text size={16} fontWeight="400">{'You don\'t have any places'}</Text>
            </View>
        )
        : (
            <FlatList
                data={props.bookmarks}
                renderItem={renderBookmarkItem}
                keyExtractor={keyExctractor}
            />
        )

);

export default BookmarksList;
