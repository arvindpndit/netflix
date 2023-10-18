// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2aertzUm0CKux8UXAw3rr_gQjJj-4Wkw",
  authDomain: "netflixgpt-arvind.firebaseapp.com",
  projectId: "netflixgpt-arvind",
  storageBucket: "netflixgpt-arvind.appspot.com",
  messagingSenderId: "24439696714",
  appId: "1:24439696714:web:bcb5ffb5d51b2fcfb365b3",
  measurementId: "G-MXBN9ZM7WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();