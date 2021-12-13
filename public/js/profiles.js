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
    console.log("signed in");
    //console.log(user.email);
    //window.location.href = "profile";
    // ...
  } else {
    // User is signed out
    console.log("signed out");
    //window.location.href = "signIn";
  }
});


function currUser() {
  console.log(firebase.auth().currentUser.email);
}

function signOutBtn() {
  var tempUser = firebase.auth().currentUser.email;

  firebase.auth().signOut().then(() => {
    window.alert("Signed out " + tempUser);
    localStorage.removeItem("uid");
    window.location.href = "/";
  }).catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : " + errorMessage);
  });
}

function signUp() {
  var userEmail = document.getElementById("emailField").value;
  var userPassword = document.getElementById("passwordField").value;
  var passConfirm = document.getElementById("passConfirm").value;

  if (userPassword == passConfirm) {
  auth.createUserWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;
      localStorage.setItem("uid", user.uid);
      var uidArr = [user.uid];

      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/uid',
        data: JSON.stringify(uidArr),
        contentType: "application/json",
        
        success: function (res) {
            console.log("post success");
        },
        error: function (xhr, status, err) {
            console.log(xhr.responseText);
        }
    });

      window.alert("Account created: " + user.email);
      window.location.href = "profile";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
  }
  else { window.alert("Passwords do not match"); }

}

/*
TEST LOGIN:
aaronknestaut@gmail.com
testAccount
*/
function signIn() {
  var userEmail = document.getElementById("emailField").value;
  var userPassword = document.getElementById("passwordField").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;
      localStorage.setItem("uid", user.uid);
      window.alert("Signed In: " + user.email);
      window.location.href = "profile";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      window.alert("Error : " + errorMessage);
    });
}

function changePass() {
  var newPass = document.getElementById("newPass").value;
  var newPassConfirm = document.getElementById("newPassConfirm").value;

  if (newPass == newPassConfirm) {
    user.updatePassword(newPassword).then(() => {
      // Update successful.
      window.alert("Password updated successfully");
    }).catch((error) => {
      // An error ocurred
      window.alert("Error: " + error.message);
    });
  }
  else { window.alert("Error: passwords don't match"); }
}