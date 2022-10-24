// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkScoDkOktej5rq-OxHh_ct8X3b0PI61k",
  authDomain: "hackevent-fd341.firebaseapp.com",
  projectId: "hackevent-fd341",
  storageBucket: "hackevent-fd341.appspot.com",
  messagingSenderId: "422353756935",
  appId: "1:422353756935:web:57d63f1dc61009e3e2dba2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
