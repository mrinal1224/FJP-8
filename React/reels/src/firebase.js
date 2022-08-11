// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
       apiKey: "AIzaSyCl8qbbHUJwyoXwzUlDLJgOfNcfA1flYME",
       authDomain: "reels-fjp8.firebaseapp.com",
       projectId: "reels-fjp8",
       storageBucket: "reels-fjp8.appspot.com",
       messagingSenderId: "892888970524",
       appId: "1:892888970524:web:ffc7a6938f5e084d00f6d9"
     };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
