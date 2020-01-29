import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    FlatList,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { moderateScale } from 'react-native-size-matters';

import { screenNames } from '../utilities/constants';
import { DogCard } from '../components/AllDogs';
import { strings } from '../localization';
import { Button, Header } from '../components/common';
import { navigate } from '../utilities/NavigationService';
import { commonStyles } from '../utilities/commonStyles';
import { deleteDog } from '../store/actions/dogActions';

const AllDogs = (props) => {
    const onAddDogPress = () => navigate(screenNames.AddEditDog);

    const onRemoveDogPress = (dog) => Alert.alert(
        strings.deleteDog,
        strings.areYouSureToDeleteDog,
        [
            {
                text: strings.cancel,
                onPress: () => {},
                style: 'cancel',
            },
            { text: strings.delete, onPress: () => props.deleteDog({ dogId: dog.id }) },
        ],
        { cancelable: false },
    );

    const onEditDogPress = (dog) => navigate(screenNames.AddEditDog, {
        dog
    });

    const renderDogs = ({ item }) => (
        <DogCard
            dog={item}
            onRemoveDogPress={onRemoveDogPress}
            onEditDogPress={onEditDogPress}
        />
    );

    const renderListEmptyComponent = () => (
        <View style={styles.noDogsFoundContainer}>
            <Text>
                {strings.noDogsFound}
            </Text>
        </View>
    );

    const renderItemSeparatorComponent = () => <View style={styles.itemSeparator} />;

    const { allDogs } = props;

    return (
        <View style={commonStyles.wrapper}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.sectionContainer}>
                <Header
                    title={strings.dogs}
                />

                <FlatList
                    data={allDogs}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderDogs}
                    ListEmptyComponent={renderListEmptyComponent}
                    ItemSeparatorComponent={renderItemSeparatorComponent}
                    contentContainerStyle={styles.list}
                />
            </View>

            <Button
                label={strings.addDog}
                onPress={onAddDogPress}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    sectionContainer: {
        flex: 1,
    },
    noDogsFoundContainer: {
        alignItems: 'center',
    },
    list: {
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScale(20),
        paddingBottom: moderateScale(50),
    },
    itemSeparator: { height: moderateScale(15) },
    noDogsFound: {
        fontSize: moderateScale(14)
    }
});

const mapStatesToProps = ({ dogs }) => {
    const { allDogs } = dogs;

    return { allDogs };
};

export default connect(mapStatesToProps, {
    deleteDog
})(AllDogs);
