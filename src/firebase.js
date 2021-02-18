import firebase from "firebase/app";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAftg3ec4KLdBNWuZDokigBkYFGzw50dqI",
  authDomain: "uhaus-38e78.firebaseapp.com",
  projectId: "uhaus-38e78",
  storageBucket: "uhaus-38e78.appspot.com",
  messagingSenderId: "441456942020",
  appId: "1:441456942020:web:a1c4afd92fb7d9014fe291",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export default firebaseApp;
