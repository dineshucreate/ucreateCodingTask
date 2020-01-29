import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { colors } from '../../utilities/constants';
import { strings } from '../../localization';
import { Button } from '../common';
import { DetailCard } from './DetailCard';
import { ColorCard } from './ColorCard';

const colorsList = ['Red', 'Blue', 'Black', 'Orange', 'Purple', 'Green', 'White', 'Yellow'];

const DogCard = ({ dog, onRemoveDogPress, onEditDogPress }) => {
    const removeDog = () => onRemoveDogPress(dog);
    const editDog = () => onEditDogPress(dog);

    const renderColorsCard = ({ item, index }) => (
        <ColorCard
            color={item}
            index={index}
        />
    );

    const keyExtractor = (item) => String(item);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={editDog}
            activeOpacity={0.6}
        >
            <DetailCard
                label={strings.dogName}
                value={dog.dogName}
            />
            <DetailCard
                label={strings.breed}
                value={dog.dogBreed}
                marginTop={moderateScale(10)}
            />
            <DetailCard
                label={strings.dogColor}
                value={dog.dogColor}
                marginTop={moderateScale(10)}
            />
            <FlatList
                data={colorsList}
                renderItem={renderColorsCard}
                keyExtractor={keyExtractor}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.list}
            />
            <DetailCard
                label={strings.description}
                value={dog.description}
                marginTop={moderateScale(10)}
            />
            <View style={styles.buttonsContainer}>
                <Button
                    label={strings.remove}
                    containerStyle={styles.removeButton}
                    onPress={removeDog}
                />
                <Button
                    label={strings.edit}
                    containerStyle={styles.editButton}
                    onPress={editDog}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(10),
        backgroundColor: colors.white1,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: colors.black1,
        shadowOpacity: 0.2,
        borderRadius: moderateScale(5)
    },
    removeButton: {
        flex: 1,
        backgroundColor: colors.red1,
        borderRadius: moderateScale(8),
        marginRight: moderateScale(10),
        height: moderateScale(40)
    },
    editButton: {
        flex: 1,
        backgroundColor: colors.green,
        borderRadius: moderateScale(8),
        marginLeft: moderateScale(10),
        height: moderateScale(40)
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10)
    },
    list: {
        marginTop: moderateScale(10)
    }
});

export { DogCard };
