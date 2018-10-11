// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';


type Props = {
    containerStyle?: ViewStyleProp,
    buttonStyle?: ViewStyleProp,
    titleStyle?: ViewStyleProp,
};

const styles = StyleSheet.create({
    container: {
        height: 'auto',
        // backgroundColor: '#2b53ce',
        //#67c025
    },
    button: {
        borderRadius: 8,
        backgroundColor: '#2b53ce',
        //#67c025
    },
    title: {
        padding: 12,
        fontFamily: 'System',
        fontWeight: 'normal',
    }
});

const CustomButton = (props: Props) => {
    const {
        containerStyle,
        buttonStyle,
        titleStyle,
        ...rest
    } = props;
    const containerStyles = [styles.container, containerStyle];
    const buttonStyles = [styles.button, buttonStyle];
    const titleStyles = [styles.title, titleStyle];
    return (
        <Button
            containerStyle={containerStyles}
            buttonStyle={buttonStyles}
            titleStyle={titleStyles}
            {...rest}
        />
    );
};

CustomButton.defaultProps = {
    containerStyle: null,
    buttonStyle: null,
    titleStyle: null,
};

export default CustomButton;
