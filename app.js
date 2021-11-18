// Inital firebase pulls can be called from here
// Use the router gets to add the different pages to the sitemap
// See the README in the repo on how to properly set eveything up with GETs from firebase
// Can store them in local storage on browser as opposed to 

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req, res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');