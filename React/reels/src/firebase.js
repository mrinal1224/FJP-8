// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'



import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyCPdiDX5MAH1xxDkaU2_B7Z-BFDH8Zy0",
  authDomain: "reels-f8.firebaseapp.com",
  projectId: "reels-f8",
  storageBucket: "reels-f8.appspot.com",
  messagingSenderId: "656124205428",
  appId: "1:656124205428:web:97350e5edb2d325488f421"
     };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

const firestore = firebase.firestore()

export const database = {
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  comments : firestore.collection('comments'),
  getTimestamp : firebase.firestore.FieldValue.serverTimestamp
}

export const storage = firebase.storage()


