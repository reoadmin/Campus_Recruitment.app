/**
 * Created by S jawwad hashmi on 1/27/2017.
 */
import {
    GET_BOOKING_PROCESS,
    UPDATE_BOOKING_PROCESS,
    CANCEL_BOOKING_PROCESS,
    ADD_FEEDBACK
} from './action-types';

export function getbookingSlots(data) {
    return {
        type: GET_BOOKING_PROCESS,
        payload:data
    };
}

export function updatebookingSlots(data) {
    return {
        type: UPDATE_BOOKING_PROCESS,
        payload:data
    };
}
export function cancelbookingSlots(data) {
    return {
        type: CANCEL_BOOKING_PROCESS,
        payload:data
    };
}

export function addFeedBack(data) {
    return {
        type: ADD_FEEDBACK,
        payload:data
    };
}