const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var admin = require("firebase-admin");
//update to local path
var serviceAccount = require("/Users/aidanchao/fridgedaddy-ud21-firebase-adminsdk-46k31-8ea7205be6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fridgedaddy-ud21-default-rtdb.firebaseio.com"
});

app.use(express.json());
app.use(express.urlencoded());

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/index.html'));
});

router.get('/search', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/recipe-results.html'));
});

router.get('/recipe', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/recipe.html'));
});

router.get('/cookbook', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/cookbooks.html'));
});

router.get('/addcookbook', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/add-cookbooks.html'));
});

router.get('/viewcookbook', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/view-cookbook.html'));
});

router.get('/signIn',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/profiles/signIn.html'));
});

//testing
router.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/RandomChina.html'));
});

app.get('/recipes', function (req, res) {
  var ref = admin.database().ref('recipes/recipe/');
  ref.on("value", function (snapshot) {
    res.send(snapshot.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
});

app.get('/tags', function (req, res) {
  var dropdown = []
  var ref = admin.database().ref('recipes/recipe/');
  ref.on("value", function (snapshot) {
    for (var i = 0; i < snapshot.val().length; i++) {
      for (var j = 0; j < snapshot.val()[i].tag.length; j++) {
        if (!dropdown.includes(snapshot.val()[i].tag[j])) {
          dropdown.push(snapshot.val()[i].tag[j]);
        }
      }
    } res.send(dropdown);
  }, function (error) {
    console.log("Error: " + error.code);
  });
});

app.get('/cookbookList', function (req, res) {
  var ref = admin.database().ref('mycookbooks/');
  ref.on("value", function (snapshot) {
    console.log(snapshot.val());
    res.send(snapshot.val());
  }, function (error) {
    console.log("Error: " + error.code);
  });
});

app.post('/cookbooks', function (req, res) {
  var ref = admin.database().ref('mycookbooks/')
  console.log(req.body);
  var cookbookName = req.body[0];
  var cookbookDesc = req.body[1];

  console.log(cookbookName);

  var recipes = req.body.slice(2);

  ref.push ({
    Cookbook: {
      CookbookName: cookbookName,
      CookbookDesc: cookbookDesc,
      Recipes: recipes
    }
  });
  res.send('POST request to the homepage')
})

app.use('/public', express.static(path.join(__dirname, "public")));
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');