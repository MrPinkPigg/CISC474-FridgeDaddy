const auth = firebase.auth(app);
let user = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    //window.location.href = "signOut.html";
    // ...
  } else {
    // User is signed out
    //window.location.href = "signIn.html";
  }
});


function signOutBtn() {
  firebase.auth().signOut().then(() => {
    //window.alert("Signed out " + user.email);
  }).catch((error) => { });
}

function signUp() {
  var userEmail = document.getElementById("emailField").value;
  var userPassword = document.getElementById("passwordField").value;

  auth.createUserWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      user = firebase.auth().currentUser;
      //window.alert("Account created: " + user.email);
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
      //window.alert("Signed In: " + user.email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });

}