// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq0ziu2IydVWtN89EErVwdaQ0GDRlFELc",
  authDomain: "fridgedaddy-ud21.firebaseapp.com",
  projectId: "fridgedaddy-ud21",
  storageBucket: "fridgedaddy-ud21.appspot.com",
  messagingSenderId: "50638166336",
  appId: "1:50638166336:web:ae86460489c6c62065c2a5",
  measurementId: "G-FCE1GXWGTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);