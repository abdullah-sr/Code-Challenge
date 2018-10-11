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
    bookmarks: Array<Place>,
    onPress: (Place) => mixed
};


class BookmarksList extends React.Component<Props> {
    renderBookmarkItem = ({ item }: { item: Place }) => (
        <BookmarkItem
            key={item.placeID}
            item={item}
            onPress={this.props.onPress}
        />
    );

    keyExctractor = (item: Place) => item.placeID;

    render() {
        return (
            this.props.bookmarks.length === 0
                ? (
                    <View style={styles.textContainer}>
                        <Text size={16} fontWeight="400">{'You don\'t have any places'}</Text>
                    </View>
                )
                : (
                    <FlatList
                        data={this.props.bookmarks}
                        renderItem={this.renderBookmarkItem}
                        keyExtractor={this.keyExctractor}
                    />
                )
        );
    }
}

export default BookmarksList;
