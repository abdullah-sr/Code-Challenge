// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, normalize } from 'react-native-elements';
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';


type Props = {
    containerStyle?: ViewStyleProp,
    buttonStyle?: ViewStyleProp,
    titleStyle?: ViewStyleProp,
    success?: boolean,
    loading?: boolean,
};

const styles = StyleSheet.create({
    container: {},
    button: {
        height: 40,
        borderRadius: 8,
        backgroundColor: 'rgba(4,4,206,1)',
    },
    title: {
        fontFamily: 'System',
        fontWeight: 'normal',
        fontSize: normalize(11),
    },
    buttonSuccess: {
        backgroundColor: '#29BF12',
    },
    buttonDisabled: {
        height: 50,
        borderRadius: 8,
        backgroundColor: 'rgba(4,4,206,0.7)',
        elevation: 0,

    }
});

const CustomButton = (props: Props) => {
    const {
        containerStyle,
        buttonStyle,
        titleStyle,
        success,
        loading,
        ...rest
    } = props;
    const containerStyles = [styles.container, containerStyle];
    const titleStyles = [styles.title, titleStyle];
    const buttonStyles = [
        styles.button,
        buttonStyle,
        success ? styles.buttonSuccess : null
    ];
    const successIcon = {
        name: 'check',
        color: '#fff'
    };
    return (
        <Button
            containerStyle={containerStyles}
            buttonStyle={buttonStyles}
            titleStyle={titleStyles}
            disabledStyle={styles.buttonDisabled}
            icon={success ? successIcon : null}
            loading={loading}
            disabled={loading}
            {...rest}
        />
    );
};

CustomButton.defaultProps = {
    containerStyle: null,
    buttonStyle: null,
    titleStyle: null,
    success: false,
    loading: false,
};

export default CustomButton;
