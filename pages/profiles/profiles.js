const auth = firebase.auth(app);

function onAuthStateChanged(auth, user) {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    window.location.href = "myProfile.html"

  } else {
    // User is signed out

    window.location.href = "signIn.html"

  }
}

function signUp() {
  var userEmail = document.getElementById("emailField").value;
  var userPassword = document.getElementById("passwordField").value;

  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
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
      const user = userCredential.user;
      window.alert("Signed In: " + userEmail);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });

}