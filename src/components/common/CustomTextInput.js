import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInputProperties,
    TextInput
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../utilities/constants';

const CustomTextInput = React.forwardRef((props: TextInputProperties, ref) => (
    <View
        style={{
            ...styles.container,
            height: props.multiline ? moderateScale(100) : moderateScale(52),
            ...props.containerStyle
        }}
    >
        <Text style={styles.label}>
            {props.label}
        </Text>

        <TextInput
            ref={ref}
            blurOnSubmit={false}
            {...props}
            style={[styles.textInput, props.style]}
        />
    </View>
));

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: moderateScale(0.5),
        borderBottomColor: colors.grey1,
    },
    textInput: {
        flex: 1,
        fontSize: moderateScale(14),
        padding: moderateScale(5),
    },
    label: {
        fontSize: moderateScale(14),
        color: colors.grey1
    }
});

export { CustomTextInput };
