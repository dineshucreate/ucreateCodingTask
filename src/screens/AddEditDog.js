import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    InputAccessoryView,
    Text,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { commonStyles } from '../utilities/commonStyles';
import { Header, CustomTextInput, Button } from '../components/common';
import { strings } from '../localization';
import { showErrorMessage } from '../utilities/helperFunctions';
import { addDog, editDog } from '../store/actions/dogActions';
import { icons } from '../../assets';
import { goBack } from '../utilities/NavigationService';
import { colors } from '../utilities/constants';

const AddNewDog = (props) => {
    const breedRef = React.createRef();
    const colorRef = React.createRef();
    const descriptionRef = React.createRef();
    const inputAccessoryViewID = 'descriptionUniqueID';

    const dog = props.navigation.getParam('dog', null);

    const [dogName, setDogName] = useState(dog ? dog.dogName : '');
    const [dogBreed, setDogBreed] = useState(dog ? dog.dogBreed : '');
    const [dogColor, setDogColor] = useState(dog ? dog.dogColor : '');
    const [description, setDescription] = useState(dog ? dog.description : '');

    const onAddEditDogPress = () => {
        if (!dogName.trim()) {
            return showErrorMessage(strings.pleaseEnterDogName);
        } else if (!dogBreed.trim()) {
            return showErrorMessage(strings.pleaseEnterDogBreed);
        } else if (!dogColor.trim()) {
            return showErrorMessage(strings.pleaseEnterDogColor);
        } else if (!description.trim()) {
            return showErrorMessage(strings.pleaseEnterDescription);
        }

        const data = {
            id: uuid(),
            dogName: dogName.trim(),
            dogBreed: dogBreed.trim(),
            dogColor: dogColor.trim(),
            description: description.trim()
        };

        if (dog) { //edit dog
            data.id = dog.id;

            return props.editDog({ data });
        }

        props.addDog({ data });
    };

    const onHeaderLeftPress = () => goBack();

    const onNameSubmit = () => breedRef.current.focus();
    const onBreedSubmit = () => colorRef.current.focus();
    const onColorSubmit = () => descriptionRef.current.focus();
    const onDonePress = () => Keyboard.dismiss();

    let title = strings.addNewDog;

    if (dog) {
        title = strings.editDog;
    }

    return (
        <View style={commonStyles.wrapper}>
            <Header
                title={title}
                leftIconSource={icons.icBack}
                onLeftPress={onHeaderLeftPress}
            />

            <KeyboardAwareScrollView style={styles.formContainer}>
                <CustomTextInput
                    label={strings.dogName}
                    value={dogName}
                    onChangeText={setDogName}
                    containerStyle={styles.textInputContainer}
                    returnKeyType={'next'}
                    onSubmitEditing={onNameSubmit}
                />

                <CustomTextInput
                    ref={breedRef}
                    label={strings.dogBreed}
                    value={dogBreed}
                    onChangeText={setDogBreed}
                    containerStyle={styles.textInputContainer}
                    returnKeyType={'next'}
                    onSubmitEditing={onBreedSubmit}
                />

                <CustomTextInput
                    ref={colorRef}
                    label={strings.dogColor}
                    value={dogColor}
                    onChangeText={setDogColor}
                    containerStyle={styles.textInputContainer}
                    returnKeyType={'next'}
                    onSubmitEditing={onColorSubmit}
                />

                <CustomTextInput
                    ref={descriptionRef}
                    label={strings.description}
                    value={description}
                    onChangeText={setDescription}
                    multiline
                    containerStyle={styles.textInputContainer}
                    style={styles.description}
                    inputAccessoryViewID={inputAccessoryViewID}
                />
            </KeyboardAwareScrollView>

            <Button
                label={dog ? strings.edit : strings.addDog}
                onPress={onAddEditDogPress}
            />

            <InputAccessoryView nativeID={inputAccessoryViewID}>
                <View style={styles.accessoryViewConatiner}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={styles.doneButton}
                        onPress={onDonePress}
                    >
                        <Text style={styles.done}>
                            {strings.done}
                        </Text>
                    </TouchableOpacity>
                </View>
            </InputAccessoryView>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: moderateScale(15)
    },
    textInputContainer: {
        marginTop: moderateScale(20)
    },
    description: {
        textAlignVertical: 'top',
        marginTop: 0
    },
    accessoryViewConatiner: {
        height: moderateScale(40),
        backgroundColor: colors.grey2,
        alignItems: 'flex-end'
    },
    done: {
        color: colors.blue1
    },
    doneButton: {
        height: moderateScale(40),
        width: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default connect(null, {
    addDog,
    editDog
})(AddNewDog);
