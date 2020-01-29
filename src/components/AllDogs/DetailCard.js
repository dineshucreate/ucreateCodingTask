import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const DetailCard = ({ label, value, marginTop }) => (
    <>
        <Text style={{ ...styles.label, marginTop }}>
            {label}
        </Text>
        <Text style={styles.value}>
            {value}
        </Text>
    </>
);

const styles = StyleSheet.create({
    label: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        marginTop: moderateScale(10)
    },
    value: {
        fontSize: moderateScale(14)
    }
});

export { DetailCard };
