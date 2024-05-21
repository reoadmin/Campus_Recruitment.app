/**
 * Created by Admin on 12/29/2016.
 */
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCJwZZE-qa-sRWC3IeZ4JJUB4defxHt6IQ",
    authDomain: "panacloud-parking-system.firebaseapp.com",
    databaseURL: "https://panacloud-parking-system.firebaseio.com",
    storageBucket: "panacloud-parking-system.appspot.com",
    messagingSenderId: "879791800293"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();