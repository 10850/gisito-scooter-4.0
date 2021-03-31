import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAnjaCEy0qRtfTqXwuZjRGQoUvy9yZxBY8",
    authDomain: "gisito-scooters-v4.firebaseapp.com",
    projectId: "gisito-scooters-v4",
    storageBucket: "gisito-scooters-v4.appspot.com",
    messagingSenderId: "385186938964",
    appId: "1:385186938964:web:2fd0df02fab3328b6aedc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const productStorage = firebase.storage();
  const db = firebase.firestore();
  const auth = firebase.auth();

  export { productStorage, db, auth }