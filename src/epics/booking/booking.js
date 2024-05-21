/**
 * Created by S jawwad hashmi on 1/28/2017.
 */
/**
 * Created by S jawwad hashmi on 1/27/2017.
 */

import { Observable } from "rxjs";

import { ActionsObservable } from "redux-observable";

import { browserHistory } from 'react-router'; // http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router


import {
    GET_BOOKING_PROCESS,
    GET_BOOKING_PROCESS_SUCCESS,
    CANCEL_BOOKING_PROCESS,
    UPDATE_BOOKING_PROCESS,
    UPDATE_BOOKING_PROCESS_SUCCESS
} from '../../action/booking';

import firebase from 'firebase';
import { firebaseDb } from '../../config/firebase';




export const getbookingEpics = action$ =>
    action$.ofType(GET_BOOKING_PROCESS)
        .switchMap(({payload}) => {
            return Observable.fromPromise(firebaseDb.ref('/').child(`slots`).child(payload).once('value'))

                .map(u => {
                    return {
                        type: GET_BOOKING_PROCESS_SUCCESS,
                        payload: u.val()

                    }

                });

        })
export const cancelbookingEpics = action$ =>
    action$.ofType(CANCEL_BOOKING_PROCESS)
        .switchMap(({payload}) => {

            const data={

                bookedbyName:' ',
                booking:false,
                bookedby:'',
                startingTime:'',
                startingDate:'',
                endingTime:'',


            }
            return firebaseDb.ref('/').child(`slots`).child(payload.slotid).child('111111').update(data)

                .then(d => {
                    return {
                        type: GET_BOOKING_PROCESS,
                        payload:payload.slotid
                    };
                })


        })
export const updatebookingEpics = action$ =>
    action$.ofType(UPDATE_BOOKING_PROCESS)
        .switchMap(({payload}) => {


            const data={

                bookedbyName:' booked by ' +payload.user,
                booking:true,
                bookedby:payload.userid,
                startingTime:payload.startTime,
                startingDate:payload.startDate,
                endingTime:payload.endTime,


            }


            return firebaseDb.ref('/').child(`slots`).child(payload.slotid).child(payload.data.uid).update(data)

                .then(d => {

                    return {
                        type: GET_BOOKING_PROCESS,
                        payload:payload.slotid
                    };
                })


        })