// a1)  Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// a4) initialize getfirestore 
import { addDoc, collection, getFirestore } from "firebase/firestore";
// r1) to use authentication import getAuth from firebase 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { userProfile } from "./components/Register";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// a2) Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};



// a3) Initialize Firebase, connection between firebase and our project 
const app = initializeApp(firebaseConfig);

// a5) Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// r2) Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const registerWithEmailAndPassword = async (userProfile: userProfile) => {
// r3)  When a user completes the form, validate the email address and password provided by the user, then pass them to the
// createUserWithEmailAndPassword method:
  try {
    const res = await createUserWithEmailAndPassword(
      // r4) auth variable refences the app 
      auth,
      userProfile.email,
      userProfile.password
    );
    const user = res.user;
    // const firestoreResponse = await addDoc(collection(db, "users"), {
    //   uid: user.uid,
    //   authProvider: "local",
    //   email: userProfile.email,
    // });
    console.log(user)

  }
  catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

export {
  auth,
  registerWithEmailAndPassword
};