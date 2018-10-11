// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';


type Props = {
    containerStyle?: ViewStyleProp
};

const styles = StyleSheet.create({
    addNewPlaceBtnContainer: {
        height: 'auto',
        borderRadius: 5,
        overflow: 'hidden',
        // backgroundColor: '#2b53ce',
        //#67c025
    },
    addNewPlaceBtn: {

        backgroundColor: '#2b53ce',
        //#67c025
    },
    addNewPlaceTitle: {
        padding: 12,
    }
});

const AddNewPlaceButton = (props: Props) => (
    <Button
        containerStyle={[styles.addNewPlaceBtnContainer, props.containerStyle]}
        buttonStyle={styles.addNewPlaceBtn}
        titleStyle={styles.addNewPlaceTitle}
        title="Add New Place"
    />
);

AddNewPlaceButton.defaultProps = {
    containerStyle: null,
};

export default AddNewPlaceButton;
