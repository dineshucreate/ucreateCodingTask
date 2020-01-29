import { takeLatest } from 'redux-saga/effects';

import {
    addDogSaga,
    editDogSaga,
    deleteDogSaga
} from './dogSagas';
import { actionTypes } from '../../utilities/constants';

export default function* rootSaga() {
    yield takeLatest(actionTypes.ADD_DOG_REQUESTED, addDogSaga);
    yield takeLatest(actionTypes.EDIT_DOG_REQUESTED, editDogSaga);
    yield takeLatest(actionTypes.DELETE_DOG_REQUESTED, deleteDogSaga);
}
