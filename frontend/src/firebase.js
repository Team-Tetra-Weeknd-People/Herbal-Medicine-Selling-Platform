// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9ws1tq8DovN2MTFP7R-IZOru7uS90B8E",
  authDomain: "beheth-kade-6ds3w9c.firebaseapp.com",
  projectId: "beheth-kade-6ds3w9c",
  storageBucket: "beheth-kade-6ds3w9c.appspot.com",
  messagingSenderId: "331139380976",
  appId: "1:331139380976:web:d5ecac92d6989b96fef435",
  measurementId: "G-NR90D868J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);