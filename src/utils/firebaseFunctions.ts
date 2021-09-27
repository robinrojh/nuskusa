import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

console.log(process.env.REACT_APP_API_KEY);

firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    // measurementId: process.env.REACT_APP_MEASUREMENT_ID
})

const authService = firebase.auth();
const dbService = firebase.firestore();
const storageService = firebase.storage();

export { authService, dbService, storageService }