import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDXU7kLMCNyhGJ3eW_y-da-8YW_Py4GoJs",
  authDomain: "crwn-db-6e1c6.firebaseapp.com",
  projectId: "crwn-db-6e1c6",
  storageBucket: "crwn-db-6e1c6.appspot.com",
  messagingSenderId: "264764636367",
  appId: "1:264764636367:web:87b5e445f7ff9b59a74bba",
  measurementId: "G-CQ4YL3Z452",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
