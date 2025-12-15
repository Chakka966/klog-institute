// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHYpyUsbuWeeccWq_Gns1cIf8hWUJpZ_M",
  authDomain: "durga-project-9101e.firebaseapp.com",
  projectId: "durga-project-9101e",
  storageBucket: "durga-project-9101e.firebasestorage.app",
  messagingSenderId: "888508034726",
  appId: "1:888508034726:web:40857abd26cc4c99c80e67",
  measurementId: "G-TSLCRTFN83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default db;