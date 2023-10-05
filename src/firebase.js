// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    
    authDomain: "clone-94e51.firebaseapp.com",
    projectId: "clone-94e51",
    storageBucket: "clone-94e51.appspot.com",
    messagingSenderId: "211217091488",
    appId: "1:211217091488:web:e511a7d4aa8cade440f2c5",
    measurementId: "G-5FHQ4EZL6M"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);  

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
