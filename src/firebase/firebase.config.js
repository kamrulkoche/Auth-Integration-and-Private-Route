// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKUj9OMFH-LAmPRqKby0DaDdQVXRCk1w4",
  authDomain: "auth-moha-milon-8b32c.firebaseapp.com",
  projectId: "auth-moha-milon-8b32c",
  storageBucket: "auth-moha-milon-8b32c.appspot.com",
  messagingSenderId: "891028064170",
  appId: "1:891028064170:web:5d42f6e93a85b63595cdd3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
