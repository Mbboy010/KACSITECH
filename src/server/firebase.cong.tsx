// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGfhNUp0ebDgaKQkewgJSJ7PvL82_8tBA",
  authDomain: "kacsi-tech.firebaseapp.com",
  projectId: "kacsi-tech",
  storageBucket: "kacsi-tech.appspot.com",
  messagingSenderId: "376582982028",
  appId: "1:376582982028:web:5b284f878644c4c47d6ea9",
  measurementId: "G-N75EQH27HT"
};


// Initialize Fireba
const app = initializeApp(firebaseConfig);


export const storage = getStorage(app);
export const db = getFirestore(app)
export const auth = getAuth(app)


