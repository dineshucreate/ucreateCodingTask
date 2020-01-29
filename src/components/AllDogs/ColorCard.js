import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../utilities/constants';

const ColorCard = ({ color, index }) => {
    const dummyOnPress = () => { };

    return (
        <TouchableWithoutFeedback onPress={dummyOnPress}>
            <View
                style={{
                    ...styles.container,
                    marginLeft: index === 0 ? 0 : moderateScale(5)
                }}
            >
                <Text style={styles.color}>
                    {color}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(12),
        backgroundColor: colors.grey2,
        borderRadius: moderateScale(2)
    },
    color: {
        fontSize: moderateScale(14)
    }
});

export { ColorCard };
