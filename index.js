// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
   apiKey: "AIzaSyCq0ziu2IydVWtN89EErVwdaQ0GDRlFELc",
   authDomain: "fridgedaddy-ud21.firebaseapp.com",
   databaseURL: "https://fridgedaddy-ud21-default-rtdb.firebaseio.com",
   projectId: "fridgedaddy-ud21",
   storageBucket: "fridgedaddy-ud21.appspot.com",
   messagingSenderId: "50638166336",
   appId: "1:50638166336:web:6c328b93575a53a565c2a5",
   measurementId: "G-JBH3ETNLM2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


document.getElementById("index-button").onclick = function () {
   localStorage.setItem("search", JSON.stringify(document.getElementById("search-bar").value));
}

