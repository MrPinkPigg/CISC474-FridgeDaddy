# Fridge Daddy
Web application where users can search recipes based on the ingredients they have currently on hand!

![image](https://user-images.githubusercontent.com/62215188/143964489-e4978dea-171d-4997-ba04-2728c1a4dea9.png)

### Installation & Running

1. Install required packages (`npm install`):
	* express
	* firebase
	* firebase-admin
	
2. Download the Firebase SDK JSON file and add to main directory. Copy the *full local path* of this file and paste it within the `serviceAccount` variable in `app.js`

3. Run using `node app.js` By default, the port is `3000`

### REST Endpoints

`/recipes` - **GET** - sends snapshot of object containing all recipes

`/tags` - **GET** - parses ingredient tags and sends array of all ingredients used in every recipe

`/cookbookList` - **GET** - sends list of cookbooks associated with a user ID

`/cookbooks` - **POST** - pushes a cookbook to the database under current UID

`/cookbookDelete` - **DELETE** - removes a cookbook from user cookbook list

### Database Structure
```
root
   |
   mycookbooks
   |    |
   |    [user ID]
   |        |
   |     [cookbook ID]
   |	       |
   |	       Cookbook
   |	           |
   |		   -- CookbookName: "..."
   |		   -- CookbookDesc: "..."
   |		   |
   |		   recipes
   |		       |
   |		       -- 0: "..."
   |		       -- 1: "..."
   |		       -- etc
   |
   recipes
       |
       recipe
           |
	   [recipe number]
	       |
	       -- description: "..."
	       -- name: "..."
	       -- image: "..."
	       |
	       ingredient
	       |    |
	       |   [ingredient number]
	       |    |    |
	       |    |    -- name: "..."
	       |    |    -- unit: "..."
	       |    |    -- amount: "..."
	       |    |   
	       |    etc
	       |
	       step
	       |    |
	       |    [step number]
	       |    |    |
	       |    |    -- description: "..."
	       |    |
	       |    etc
	       |
	       tag
	           |
		   -- [tag number]: "..."
		   -- etc
```


### References 

1.All recipes referenced by Randompage are https://www.allrecipes.com/ and Open Source Cookbook V2.0

2.The download page in randompage references ：

Eros Fratini - eros@recoding.it

http://plugins.jquery.com/project/jPrintArea

http://www.opensource.org/licenses/mit-license.php


