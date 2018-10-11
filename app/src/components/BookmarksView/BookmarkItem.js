// @flow
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import parser from 'parse-address';
import Text from '../shared/Text';
import type { Place } from '../../types';

const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    avatarContainer: {
        height: 90,
        width: 90,
        marginRight: 20,
        borderRadius: 5,
        overflow: 'hidden',
    },
    avatar: {
        height: '100%',
        width: '100%',
    },
    favoriteIconContainer: {
        marginLeft: 'auto',
    },
});

type Props = {
    item: Place,
    onPress: (Place) => mixed,
};

const BookmarkItem = (props: Props) => {
    const {
        number = '',
        prefix = '',
        street = '',
        type = '',
        city = '',
        state = '',
        zip = '',
    } = parser.parseLocation(props.item.address);
    return (
        <TouchableOpacity
            style={styles.rootContainer}
            onPress={() => props.onPress(props.item)}
        >
            <Avatar
                containerStyle={styles.avatarContainer}
                avatarStyle={styles.avatar}
                source={{ uri: '' }}
            />
            <View>
                <Text size={14} fontWeight="400" mb={5}>{props.item.name}</Text>
                <Text>{`${number} ${prefix} ${street} ${type}`.trim()}</Text>
                <Text>{`${city}, ${state} ${zip}`.trim()}</Text>
            </View>
            {
                props.item.bookmarked &&
                <Icon
                    containerStyle={styles.favoriteIconContainer}
                    name="favorite"
                    color="#29BF12"
                />
            }
        </TouchableOpacity>
    );
};

export default BookmarkItem;
