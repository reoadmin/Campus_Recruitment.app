// import firebase from 'firebase';
// import { firebaseAuth,firebaseDb } from '../../config/firebase';
// import {
//   SIGN_IN_ERROR,
//   SIGN_IN_SUCCESS,
//   SIGN_OUT_SUCCESS,
//   SIGN_OUT_ERROR,
//   REGISTER_ERROR,
//   REGISTER_SUCCESS,
//   ADDUSER_SUCCESS,
//   ADDUSER_ERROR
// } from './action-types';


// // function authenticate(provider) {
// //   return dispatch => {
// //      firebaseAuth.signInWithPopup(provider)
// //       .then(result => dispatch(signInSuccess(result)))
// //       .catch(error => dispatch(signInError(error)));
// //   };
// // }



// // singn in process
// function customAuthenticate(credentials) {
//   return dispatch => {
//     firebaseAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(result => dispatch(signInSuccess(result)))
//       .catch(error => dispatch(signInError(error)));
//   };
// }
// export function signInWithCustom(credentials) {
//   return customAuthenticate(credentials);
// }
// export function signInError(error) {
//   return {
//     type: SIGN_IN_ERROR,
//     payload: error
//   };
// }
// export function signInSuccess(result) {
//   return {
//     type: SIGN_IN_SUCCESS,
//     payload: result
//   };
// }




// // export function customRegister(credentials) {
// //   return firebaseAuth().createUserWithEmailAndPassword(credentials.email, credentials.password)
// //     .then(saveUser)
// //     .catch((error) => console.log('Oops', error))
// // }


// export function saveUser (user,credentials) {
//   return dispatch => {
//     firebaseDb.ref().child(`users/${user.uid}`)
//     .set({
//       firstName:credentials.firstName,
//       lastName:credentials.lastName,
//       email: user.email,
//       uid: user.uid,
//       role:credentials.role,
//       lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
//     })
//       .then((result) => dispatch(addUserSuccess(user)))
//       .catch(error => dispatch(addUserError(error)));
//   };
    
// }
// // //   signup process

// // function customRegister(credentials) {
// //   return dispatch => {
// //     firebaseAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
// //       .then(result => dispatch(saveUser(result)))
// //   };
// // }


// // function customRegister(credentials) {

// //    console.log(credentials)
// // return (dispatch, getState) => {
// // 	dispatch(addUserSuccess(credentials))
// // 		return firebaseAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
// // 			.then(user => 
// // 				firebaseDb.ref().child(`users/${user.uid}`)
// //         .set({
// //       firstName:credentials.firstName,
// //       lastName:credentials.lastName,
// //       email: user.email,
// //       uid: user.uid,
// //       role:credentials.role,
// //       lastTimeLoggedIn: firebase.database.ServerValue.TIMESTAMP
// //       }))
// // 			.then(response =>dispatch(registerSuccess(response)))
// // 			.catch(error => {
// //         dispatch(registerError(error))
// // 			})
// // 	}
// // }

// function customRegister(credentials) {

//    console.log(credentials)
// return (dispatch, getState) => {

// 		return firebaseAuth.createUserWithEmailAndPassword(credentials.email, credentials.password)
// 			.then((user) => {
      
// 				return saveUser(user, credentials)(dispatch)
// 			})
// 			.then(response =>dispatch(registerSuccess(response)))
// 			.catch(error => {
//         dispatch(registerError(error))
// 			})
// 	}
// }





// export function registerWithCustom(credentials) {
//   return customRegister(credentials);
// }

// export function registerError(error) {
//   return {
//     type: REGISTER_ERROR,
//     payload: error
//   };
// }
// export function registerSuccess(result) {
//   return {
//     type: REGISTER_SUCCESS,
//     payload: result
//   };
// }

// export function addUserError(error) {
//  return {
//     type: ADDUSER_ERROR,
//     payload: error
//   };
// }
// export function addUserSuccess(result) {
//    return {
//     type: ADDUSER_SUCCESS,
//     payload: result
//   };
 
// }



//   signout process

// export function signOut() {
//   return dispatch => {
//     firebaseAuth.signOut()
//       .then(() => dispatch(signOutSuccess()))
//       .catch(error => dispatch(signOutError(error)));
//   };
// }
// export function signOutSuccess() {
//   return {
//     type: SIGN_OUT_SUCCESS
//   };
// }
// export function signOutError() {
//   return {
//     type: SIGN_OUT_ERROR
//   };
// }



// // export function signInWithGithub() {
// //   return authenticate(new firebase.auth.GithubAuthProvider());
// // }
// // export function signInWithGoogle() {
// //   return authenticate(new firebase.auth.GoogleAuthProvider());
// // }
// // export function signInWithTwitter() {
// //   return authenticate(new firebase.auth.TwitterAuthProvider());
// // }
import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER
 
} from './action-types';

export function registerWithCustom(credentials) {
  return {
   type: REGISTER,
    payload: credentials
  };
}

export function signInWithCustom(credentials) {
  return {
   type: SIGN_IN,
    payload: credentials
  };
}

export function signOut() {
  return {
   type: SIGN_OUT
  };
}