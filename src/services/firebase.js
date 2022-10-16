import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCfjU6Hj4WfdkFifLYqJ-U0jP9CBm1L1Rw",
    authDomain: "homework9-21d7e.firebaseapp.com",
    databaseURL: "https://homework9-21d7e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "homework9-21d7e",
    storageBucket: "homework9-21d7e.appspot.com",
    messagingSenderId: "663810083257",
    appId: "1:663810083257:web:63802ac6324ba6ffe60e68"
};
const firebaseDb = firebase.initializeApp(firebaseConfig);
export const db = firebaseDb.database().ref();
export const auth = firebase.auth();