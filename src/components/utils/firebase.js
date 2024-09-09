// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWPRfyQD1AfUAEFd59DA9_a13yWDR0Qek",
  authDomain: "netflix-e4a5a.firebaseapp.com",
  projectId: "netflix-e4a5a",
  storageBucket: "netflix-e4a5a.appspot.com",
  messagingSenderId: "919491319150",
  appId: "1:919491319150:web:0e08b05b0983dc4e645d7f",
  measurementId: "G-MMPXKS6353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();