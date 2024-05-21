
import {
    GET_PARKING_PROCESS_ERROR,
 GET_PARKING_PROCESS_SUCCESS ,
 GET_PARKING_PROCESS
} from '../../action/parking';


const InitalState = {
    isloaded:false,
    isProcessing:false,
    parkingData: null
};

export const parkingReducer = function (state = InitalState, action) {

    switch (action.type) {

        case GET_PARKING_PROCESS:
            return Object.assign({}, state, { isProcessing: true });
        case GET_PARKING_PROCESS_SUCCESS:
            return Object.assign({}, state, { isloaded: true, parkingData: action.payload });



        default:
            return state;
    }
}

