import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBMHFp14QVyN3J2HIv10dR0_--xJPtw7fg",
    authDomain: "ecommerce-website-4457c.firebaseapp.com",
    databaseURL: "https://ecommerce-website-4457c.firebaseio.com",
    projectId: "ecommerce-website-4457c",
    storageBucket: "ecommerce-website-4457c.appspot.com",
    messagingSenderId: "870246291463",
    appId: "1:870246291463:web:5b8b0c9d1be076f04bf2a2",
    measurementId: "G-33CN9BY802"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
