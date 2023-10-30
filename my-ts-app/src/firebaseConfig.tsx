// a1)  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// a4) initialize getfirestore 
import { addDoc, collection, getFirestore } from "firebase/firestore";
// r1) to use authentication import getAuth from firebase 
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { userProfile } from "./components/Register";
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

// r3) When a user completes the form, validate the email address and password provided 
//    by the user, then pass them to the createUserWithEmailAndPassword method:
const registerWithEmailAndPassword = async (userProfile: userProfile) => {

  try {
    const res = await createUserWithEmailAndPassword(
      // r4) auth variable refences the app 
      auth,
      userProfile.email,
      userProfile.password
    );
    const user = res.user;
    // const registerForm = document.querySelector('#register-form');
    const firestoreResponse = await addDoc(collection(db, "users"), {
      // bio: registerForm['register-form'].value,
      uid: user.uid,
      authProvider: "local",
      email: userProfile.email,
    });
    console.log(firestoreResponse)
    
  }
   catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

// a3) Initialize Firebase, connection between firebase and our project 
const app = initializeApp(firebaseConfig);

// a5) Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
// r2) Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);