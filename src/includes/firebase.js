import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNJIHKLYd1wiCOq5JO3wtqsghHwjeY3rI",
  authDomain: "noteballs-cbed2.firebaseapp.com",
  projectId: "noteballs-cbed2",
  storageBucket: "noteballs-cbed2.appspot.com",
  messagingSenderId: "503797693081",
  appId: "1:503797693081:web:22a76c90476bc16346d608",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
