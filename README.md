# Firebase Setup
1. Required packages (`npm install`)
	1. express 
	2. firebase
	3. firebase-admin

2. Express
	Create `app.js` and `index.html` add broilerplate:

```
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
```

3. Database
	1. In firebase click the gear icon and select project settings
	
	![02a8752d6017a4ee05ffc7e7ac88f4f8.png](:/b02d56e67caf4e27b824e4c3cf0e9df7)
	
	2. Click on service accounts
	
    ![b37c597a261d70199bf498081d034165.png](:/33f945c3d41541ab81117b21750987db)
	
	3. Generate new private key for node.js, then move that into the same directory as `app.js`
	4. Copy the code for SDK configuration, and paste in below where we declare `admin`
	5. Now, anywhere below the initializer we can add firebase code. I used read:
	```
	var ref = admin.database().ref();
	ref.on("value", function(snapshot) {
   	console.log(snapshot.val());
	}, function (error) {
   	console.log("Error: " + error.code);
	});
	```
	This just prints out the whole database. For writing and everything else, I found [this](https://www.tutorialspoint.com/firebase/index.htm) to be super helpful.
