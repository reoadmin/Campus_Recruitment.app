import {
    GET_BOOKING_PROCESS_ERROR,
    GET_BOOKING_PROCESS_SUCCESS ,
    GET_BOOKING_PROCESS,
    UPDATE_BOOKING_PROCESS,
    UPDATE_BOOKING_PROCESS_SUCCESS,


} from '../../action/booking/action-types';


const InitalState = {
    isloaded:false,
    isProcessing:false,
    bookingData: null
};

export const boookingReducer = function (state = InitalState, action) {

    switch (action.type) {

        case GET_BOOKING_PROCESS:
            return Object.assign({}, state, { isProcessing: true });
        case GET_BOOKING_PROCESS_SUCCESS:
            return Object.assign({}, state, { isloaded: true, bookingData: action.payload });
        case UPDATE_BOOKING_PROCESS:
            return Object.assign({}, state, { isProcessing: true });
        case UPDATE_BOOKING_PROCESS_SUCCESS:
            return Object.assign({}, state, { isloaded: true, parkingData: action.payload });

        default:
            return state;
    }
}

