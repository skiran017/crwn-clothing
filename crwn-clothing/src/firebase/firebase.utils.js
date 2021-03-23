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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.msg);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
