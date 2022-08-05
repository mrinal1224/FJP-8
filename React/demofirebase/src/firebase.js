// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPs2ATYCZHldnWeilSnD5nfBCJ108F8TI",
  authDomain: "pep-fjp8.firebaseapp.com",
  projectId: "pep-fjp8",
  storageBucket: "pep-fjp8.appspot.com",
  messagingSenderId: "208153862562",
  appId: "1:208153862562:web:dc3c50b7a44a7e35d8d2fb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);