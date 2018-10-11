// @flow
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Text, normalize } from 'react-native-elements';

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
    locationName: {
        fontSize: normalize(14),
        fontWeight: '400',
        marginBottom: 5,
    }
});

type Props = {};

const BookmarkItem = (props: Props) => (
    <View style={styles.rootContainer}>
        <Avatar
            containerStyle={styles.avatarContainer}
            avatarStyle={styles.avatar}
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
        />
        <View>
            <Text style={styles.locationName}>Royals Hot Chicken</Text>
            <Text>
                736 E Market St.
            </Text>
            <Text>
                Louisville, KY 40202
            </Text>
        </View>
    </View>
);

export default BookmarkItem;
