/**
 * Created by S jawwad hashmi on 1/27/2017.
 */

import { Observable } from "rxjs";

import { ActionsObservable } from "redux-observable";

import { browserHistory } from 'react-router'; // http://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router


import {
    GET_PARKING_PROCESS,
    GET_PARKING_PROCESS_SUCCESS,
    GET_PARKING_PROCESS_ERROR,

} from '../../action/parking';

import firebase from 'firebase';
import { firebaseDb } from '../../config/firebase';




export const getparkingEpics = action$ =>
    action$.ofType(GET_PARKING_PROCESS)
        .switchMap(() => {
            return Observable.fromPromise(firebaseDb.ref('/').child(`parkingareas`).once('value'))

                .map(u => {
                    return {
                        type: GET_PARKING_PROCESS_SUCCESS,
                        payload: u.val()

                    }

            });

        })

