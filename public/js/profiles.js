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
let user = null; //firebase.auth().currentUser;

firebase.auth().onAuthStateChanged((userCredentials) => {
  if (userCredentials) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //var uid = user.uid;
    user = userCredentials;
    localStorage.setItem("uid", user.uid);
    localStorage.setItem("email", user.email);
    console.log("signed in");
    //console.log(user.email);
    //window.location.href = "profile";
    // ...
  } else {
    // User is signed out
    localStorage.clear();
    console.log("signed out");
    //window.location.href = "signIn";
  }
});

function currUser() {
  console.log(user.email);
}

function userInfo() {
  //var username = localStorage.getItem("username"); //firebase.auth().currentUser.displayName;
  var email = localStorage.getItem("email"); //firebase.auth().currentUser.email;
  //let verified = "" //firebase.auth().currentUser.emailVerified;

  document.getElementById("userInfo").innerHTML = email;
}


function signOutBtn() {
  var tempUser = user.email;

  firebase.auth().signOut().then(() => {
    window.alert("Signed out " + tempUser);

    //localStorage.removeItem("uid");
    //localStorage.removeItem("username");
    //localStorage.removeItem("email");
    
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
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed iup
      user = userCredential;

      /*
      user.updateProfile({
        displayName: user.email
      }).then(()=> {
        console.log("username set");
      }).catch((error) => {
        console.log(error.message);
      });
      */

      //localStorage.setItem("uid", user.uid);
      //localStorage.setItem("username", user.displayName);
      //localStorage.setItem("email", user.email);

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

      window.alert("Account created: " + userEmail);
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
account@test.com
testAccount
*/
function signIn() {
  var userEmail = document.getElementById("emailField").value;
  var userPassword = document.getElementById("passwordField").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCredential) => {
      // Signed in 
      user = userCredential.user;

      //localStorage.setItem("uid", user.uid);
      //localStorage.setItem("username", user.displayName);
      //localStorage.setItem("email", user.email);

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
    user.updatePassword(newPass).then(() => {
      // Update successful.
      window.alert("Password updated successfully");
    }).catch((error) => {
      // An error ocurred
      window.alert("Error: " + error.message);
    });
  }
  else { window.alert("Error: passwords don't match"); }
}

function changeName() {
  var newName = document.getElementById("newName").value;

  user.updateProfile(newName).then(() => {
    window.alert("Display name updated sucessfully");
  }).catch((error) => {
    window.alert("Error: " + error.message);
  })
}

function deleteAcct() {
  user.delete().then(() => {
    window.alert("Account deleted");
    localStorage.clear();
    window.location.href = "/";
  }).catch((error) => {
    window.alert("Error: " + error.message);
  })
}