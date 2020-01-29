import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../utilities/constants';

const Button = ({ label, onPress, containerStyle }) => (
    <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={[styles.container, containerStyle]}
    >
        <Text style={styles.label}>
            {label}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue1,
        height: moderateScale(52)
    },
    label: {
        fontSize: moderateScale(16),
        color: colors.white1
    }
});

export { Button };
