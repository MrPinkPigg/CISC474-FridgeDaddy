const express = require('express');
	const app = express();
	const path = require('path');
	const router = express.Router();
	const admin = require('firebase-admin');

	app.use(express.json());

	router.get('/',function(req,res){
	  res.sendFile(path.join(__dirname+ '/index.html'));
	});

	app.use('/', router);
	app.listen(process.env.port || 3000);

	console.log('Running at port 3000');


    var ref = admin.database().ref();
    ref.on("value", function(snapshot) {
    console.log(snapshot.val());
    }, function (error) {
    console.log("Error: " + error.code);
    });


    