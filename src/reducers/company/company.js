import {  
  COM_ADDED_ERROR,
  COM_ADDED_SUCCESS
 } from '../../action/company';

const InitalState = {

  isAdded: false,
  companyData:null
};

export const companyReducer = function (state = InitalState, action) {

  switch (action.type) {
    case COM_ADDED_ERROR:
      return Object.assign({}, state, { isAdded: false, companyData: null });
    case COM_ADDED_SUCCESS:
      return Object.assign({}, state, { isAdded: true, companyData: action });
  
    default:
      return state;
  }
}

