import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { functions } from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCJH1CM7FG_sRdQ6HiJCq6D43JWFQfr19U",
    authDomain: "my-first-project-auth.firebaseapp.com",
    databaseURL: "https://my-first-project-auth.firebaseio.com",
    projectId: "my-first-project-auth",
    storageBucket: "my-first-project-auth.appspot.com",
    messagingSenderId: "200734697342",
    appId: "1:200734697342:web:af8f187b25b78cfa61752f",
    measurementId: "G-SFK4DEFG32"
  };

  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();



const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};



export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }
  return getUserDocument(user.uid);
};




const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
  
    return {
      
      uid,
      ...userDocument.data()
      
    };
   
  } catch (error) {
    console.error("Error fetching user", error);
  }
};