// @flow
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, normalize } from 'react-native-elements';
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

const styles = StyleSheet.create({
    text: {
        fontFamily: 'System',
    },
});

type Props = {
    style?: TextStyleProp,
    m?: number,
    mt?: number,
    mr?: number,
    mb?: number,
    ml?: number,
    color?: string,
    size?: number,
    fontWeight?: string,
};

// A Text Component to be used in place of the built in Text component.
// This allows us to apply global text styles here.
const CustomText = (props: Props) => {
    const {
        style,
        m,
        mt,
        mr,
        mb,
        ml,
        color,
        size,
        fontWeight,
        ...rest
    } = props;
    const textStyles = [
        styles.text,
        style,
        {
            color,
            fontWeight,
            fontSize: normalize(size),
            margin: m,
            marginLeft: ml,
            marginTop: mt,
            marginRight: mr,
            marginBottom: mb,

        }
    ];
    return <Text style={textStyles} {...rest}/>;
};

CustomText.defaultProps = {
    style: null,
    m: 0,
    mt: 0,
    mr: 0,
    mb: 0,
    ml: 0,
    color: '#030303',
    size: 12,
    fontWeight: 'normal',
};

export default CustomText;
