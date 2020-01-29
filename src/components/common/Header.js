import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { colors } from '../../utilities/constants';

const Header = ({
    title,
    leftIconSource,
    onLeftPress,
    rightIconSource,
    onRightPress
}) => {
    const renderLeftIcon = () => {
        if (leftIconSource) {
            return (
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={onLeftPress}
                    style={styles.headerButton}
                >
                    <Image source={leftIconSource} />
                </TouchableOpacity>
            );
        }

        return <View style={styles.headerButton} />;
    };

    const renderTitle = () => {
        if (title) {
            return (
                <Text style={styles.title}>
                    {title}
                </Text>
            );
        }

        return <View />;
    };

    const renderRightIcon = () => {
        if (rightIconSource) {
            return (
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={onRightPress}
                    style={styles.headerButton}
                >
                    <Image source={rightIconSource} />
                </TouchableOpacity>
            );
        }

        return <View style={styles.headerButton} />;
    };

    return (
        <View style={styles.container}>
            {renderLeftIcon()}

            {renderTitle()}

            {renderRightIcon()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: moderateScale(54),
        backgroundColor: colors.white1,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.black1,
        shadowOpacity: 0.2,
    },
    title: {
        fontSize: moderateScale(24),
        fontWeight: '500',
    },
    headerButton: {
        width: moderateScale(54),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Header };
