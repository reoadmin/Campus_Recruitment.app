import {

    ADD_FEEDBACK_SUCCESS,
    ADD_FEEDBACK

} from '../../action/booking/action-types';


const InitalState = {
    isloaded:false,
    isProcessing:false,
    feedBackData: null
};

export const boookingReducer = function (state = InitalState, action) {

    switch (action.type) {

        case ADD_FEEDBACK:
            return Object.assign({}, state, { isProcessing: true });
        case ADD_FEEDBACK_SUCCESS:
            return Object.assign({}, state, { isloaded: true, feedBackData: action.payload });

        default:
            return state;
    }
}

