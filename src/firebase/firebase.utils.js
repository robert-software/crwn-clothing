import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2UsyyRO_k-BbyfgmSCrBG5TkISThpsdI",
    authDomain: "crwn-db-9bafa.firebaseapp.com",
    projectId: "crwn-db-9bafa",
    storageBucket: "crwn-db-9bafa.appspot.com",
    messagingSenderId: "302417146425",
    appId: "1:302417146425:web:1cda7aa4ddc6e6de3b93e8"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;