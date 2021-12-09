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

const auth = firebase.auth(firebase.initializeApp(firebaseConfig));
let user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    //console.log("signed in");
    //window.location.href = "/";
    // ...
  } else {
    // User is signed out
    //console.log("signed out");
    //window.location.href = "signIn";
  }
});

function currUser() {
  console.log(user.email);
}

function signOutBtn() {
  firebase.auth().signOut().then(() => {
    window.alert("Signed out " + user.email);
  }).catch((error) => {
    window.alert("Error : " + error.message);
  });
}

function signUp() {
  var userEmail = document.getElementById("emailField").value;
  var userPassword = document.getElementById("passwordField").value;

  auth.createUserWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      user = firebase.auth().currentUser;
      window.alert("Account created: " + user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });

}

/*
TEST LOGIN:
aaronknestaut@gmail.com
testAccount
*/
function signIn() {
  var userEmail = document.getElementById("emailField").value;
  var userPassword = document.getElementById("passwordField").value;

  auth.signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      user = firebase.auth().currentUser;
      window.alert("Signed In: " + user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}