import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYNDP0gADFJkjfPsOus8qJrFSaJPBp8K4",
  authDomain: "react-gaming-forum.firebaseapp.com",
  projectId: "react-gaming-forum",
  storageBucket: "react-gaming-forum.appspot.com",
  messagingSenderId: "875809139187",
  appId: "1:875809139187:web:8e3b0646b118e5377b8a86"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseapp);

export {auth}