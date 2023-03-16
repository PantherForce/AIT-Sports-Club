import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALVxu-o6Oik2wtDDXYSlfokkFdBMfFctg",
  authDomain: "aitsportsclub.firebaseapp.com",
  databaseURL: "https://aitsportsclub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aitsportsclub",
  storageBucket: "aitsportsclub.appspot.com",
  messagingSenderId: "411979526065",
  appId: "1:411979526065:web:7aea30c233e994fa7a5790"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export {projectFirestore}