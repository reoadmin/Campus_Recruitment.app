import * as types from './action-types';

export const addConnectedUser = ({ uid, userPayload }) => {
  return {
    type: types.USER_LOGGED_IN,
    uid,
    userPayload
  }
};