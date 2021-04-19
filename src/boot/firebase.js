import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCO-vhnp2dUPgRBKBaaLMbQf-7B9jTjuDE",
  authDomain: "qwitter-8ba62.firebaseapp.com",
  projectId: "qwitter-8ba62",
  storageBucket: "qwitter-8ba62.appspot.com",
  messagingSenderId: "840778349442",
  appId: "1:840778349442:web:aeedf20b5be75f47e32d9b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Inititialize Firestore
var db = firebase.firestore();

export default db;
