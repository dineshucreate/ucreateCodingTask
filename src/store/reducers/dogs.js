import { actionTypes } from '../../utilities/constants';

const INITIAL_STATE = {
    allDogs: [],
};

export default (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionTypes.ADD_DOG_SUCCEEDED:
        case actionTypes.EDIT_DOG_SUCCEEDED:
        case actionTypes.DELETE_DOG_SUCCEEDED:
            return { ...state, allDogs: payload.allDogs };

        default:
            return state;
    }
};
