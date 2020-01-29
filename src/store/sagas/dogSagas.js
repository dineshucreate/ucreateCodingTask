import { put } from 'redux-saga/effects';
import cloneDeep from 'clone-deep';

import store from '../';
import { actionTypes } from '../../utilities/constants';
import logger from '../../utilities/logger';
import { showErrorMessage, showSuccessMessage } from '../../utilities/helperFunctions';
import { strings } from '../../localization';
import { goBack } from '../../utilities/NavigationService';

function* addDogSaga({ params: { data } }) {
    try {
        logger.data('addDog params', data);
        const allDogs = cloneDeep(store.getState().dogs.allDogs);
        allDogs.push(data);
        const payload = { allDogs };
        yield put({ type: actionTypes.ADD_DOG_SUCCEEDED, payload });
        showSuccessMessage(strings.dogAddedSuccessfully);
        goBack();
    } catch (error) {
        logger.error('addDog error', error);
        showErrorMessage(error);
    }
}

function* editDogSaga({ params }) {
    try {
        logger.data('editDog params', params.data);
        const { data } = params;
        let allDogs = cloneDeep(store.getState().dogs.allDogs);
        allDogs = allDogs.map((dog) => {
            if (dog.id === data.id) {
                dog = data;
            }
            return dog;
        });
        const payload = { allDogs };
        yield put({ type: actionTypes.EDIT_DOG_SUCCEEDED, payload });
        showSuccessMessage(strings.dogUpdatedSuccessfully);
        goBack();
    } catch (error) {
        logger.error('editDog error', error);

        showErrorMessage(error);
    }
}

function* deleteDogSaga({ params }) {
    try {
        logger.data('deleteDog params', params);

        const { dogId } = params;

        let allDogs = cloneDeep(store.getState().dogs.allDogs);

        allDogs = allDogs.filter((dog) => dog.id !== dogId);

        const payload = { allDogs };

        yield put({ type: actionTypes.DELETE_DOG_SUCCEEDED, payload });

        showSuccessMessage(strings.dogDeletedSuccessfully);
    } catch (error) {
        logger.error('deleteDog error', error);

        showErrorMessage(error);
    }
}

export {
    addDogSaga,
    editDogSaga,
    deleteDogSaga
};
