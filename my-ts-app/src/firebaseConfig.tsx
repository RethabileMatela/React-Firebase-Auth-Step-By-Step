// a1)  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// a4) initialize getfirestore 
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// a2) Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbp8G9vvOqJdaaQcIztxud9NO0Pa6XQo8",
  authDomain: "stepbystepauth.firebaseapp.com",
  projectId: "stepbystepauth",
  storageBucket: "stepbystepauth.appspot.com",
  messagingSenderId: "70203190649",
  appId: "1:70203190649:web:c9ab079ba4ab9e011093a8",
  measurementId: "G-5PCFD23X3P"
};

// a3) Initialize Firebase
const app = initializeApp(firebaseConfig);

// a5) Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)