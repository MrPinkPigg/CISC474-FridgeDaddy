const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var admin = require("firebase-admin");
//update to local path
var serviceAccount = require("C:/Users/Aaron Knestaut/Documents/College/cisc474/CISC474-FridgeDaddy/fridgedaddy-ud21-firebase-adminsdk-46k31-bc1c91a020.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fridgedaddy-ud21-default-rtdb.firebaseio.com"
});

router.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/index.html'));
});

router.get('/search',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/recipe-results.html'));
});

router.get('/recipe',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/recipe.html'));
});

router.get('/signIn',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/profiles/signIn.html'));
});

router.get('/signUp',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/profiles/signUp.html'));
});

//testing
router.get('/test',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/RandomChina.html'));
});

app.get('/recipes', function(req, res) {
  var ref = admin.database().ref('recipes/recipe/');
  ref.on("value", function(snapshot) {
    res.send(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
  });
});

app.get('/tags', function(req, res) {
  var dropdown = []
  var ref = admin.database().ref('recipes/recipe/');
  ref.on("value", function(snapshot) {
  for(var i = 0; i < snapshot.val().length; i++) {
    for(var j = 0; j < snapshot.val()[i].tag.length; j++) {
      if(!dropdown.includes(snapshot.val()[i].tag[j])) {
        dropdown.push(snapshot.val()[i].tag[j]);
      }
    }
  } res.send(dropdown);
}, function (error) {
  console.log("Error: " + error.code);
  });
});

app.use('/public', express.static(path.join(__dirname, "public")));
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');