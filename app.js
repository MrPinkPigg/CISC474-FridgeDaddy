const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var admin = require("firebase-admin");
//update to local path
var serviceAccount = require("/Users/Madison/Desktop/styling/CISC474-FridgeDaddy/fridgedaddy-ud21-firebase-adminsdk-46k31-9e4b55cf21.json");

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

router.get('/signUp',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/profiles/signUp.html'));
});

router.get('/profile',function(req, res){
  res.sendFile(path.join(__dirname+'/public/pages/profiles/profile.html'));
});

//testing
router.get('/Random', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/Random.html'));
});

router.get('/fridges', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/fridges.html'));
});

router.get('/viewfridges', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/pages/view-fridge.html'));
});

app.get('/recipes', function (req, res) {
  var ref = admin.database().ref('recipes/recipe/');
  ref.on("value", function (snapshot) {
    return res.send(snapshot.val());
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
    } return res.send(dropdown);
  }, function (error) {
    console.log("Error: " + error.code);
  });
});

app.get('/cookbookList', function (req, res) {
  console.log("entering cookbook list)");
  var ref = admin.database().ref('mycookbooks/');
  ref.on("value", function (snapshot) {
    try {
      return res.send(snapshot.val());
    } catch {
      console.log("Headers already sent")
    }
  }, function (error) {
    console.log("Error: " + error.code);
  });
});

app.get('/fridgesList', function (req, res) {
  console.log("fridges list");
  var ref = admin.database().ref('myfridges/');
  ref.on("value", function (snapshot) {
    try {
      return res.send(snapshot.val());
    } catch {
      console.log("Headers already sent")
    }
  }, function (error) {
    console.log("Error: " + error.code);
  });
});

app.post('/uid', function (req, res) {
  var ref = admin.database().ref('mycookbooks/');

  console.log(req.body);
  /*ref.push ({
    [req.body[0]]: {
      Cookbooks: "cookbooks"
    }
  });*/
});

app.post('/cookbooks', function (req, res) {
  var ref = admin.database().ref('mycookbooks/' + req.body[0] + '/');
  var cookbookName = req.body[1];
  var cookbookDesc = req.body[2];

  var recipes = req.body.slice(2);

  ref.push ({
    Cookbook: {
      CookbookName: cookbookName,
      CookbookDesc: cookbookDesc,
      Recipes: recipes
    }
  });

  return res.send("success");
})

app.post('/fridges', function (req, res) {
  var ref = admin.database().ref('myfridges/' + req.body[0] + '/');
  var fridgeName = req.body[1];
  var fridgeCollaborators = req.body[2];
  var fruit = req.body[3];
  var vegetable = req.body[4];
  var grain = req.body[5];
  var meat = req.body[6];
  var fish = req.body[7];
  var dairy = req.body[8];
  ref.push ({
    Fridge: {
      FridgeName: fridgeName,
      FridgeCollaborators: fridgeCollaborators,
      FridgeFruit: fruit,
      FridgeVegetable: vegetable,
      FridgeGrain: grain,
      FridgeMeat: meat,
      FridgeFish: fish,
      FridgeDairy: dairy
    }
  });
  return res.send("success");
})

app.use('/public', express.static(path.join(__dirname, "public")));
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');