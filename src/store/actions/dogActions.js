import { actionTypes } from '../../utilities/constants';

const addDog = (params) => ({
    type: actionTypes.ADD_DOG_REQUESTED,
    params
});

const editDog = (params) => ({
    type: actionTypes.EDIT_DOG_REQUESTED,
    params
});

const deleteDog = (params) => ({
    type: actionTypes.DELETE_DOG_REQUESTED,
    params
});

export {
    addDog,
    editDog,
    deleteDog
};
