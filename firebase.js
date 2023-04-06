// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQWnH8RUOhukbGGYIiQAJKXaHruuanffg",
  authDomain: "tugas-akhir-sistem-pakar.firebaseapp.com",
  databaseURL: "https://tugas-akhir-sistem-pakar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tugas-akhir-sistem-pakar",
  storageBucket: "tugas-akhir-sistem-pakar.appspot.com",
  messagingSenderId: "427623090549",
  appId: "1:427623090549:web:b1f99ab86413b2a60f2b3c",
  measurementId: "G-31N4QEW9XJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()

export { auth, db }