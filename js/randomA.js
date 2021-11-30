new Vue({
    el: '#main',
    data: function () {
        return {
            showList: true,
            showInfo: false,
            showPrint: false,
            showSave: false,
            itemInfo: {//
                "type": "",
                "name": "",
                "grade": "",
                "picture": "",
                "describe": "",
                "materials": [],
                "steps": []

            },
            list: [
                {
                    "type": "Meats",
                    "name": "Pizza",
                    "grade": 3.1,
                    "picture": "../../images/pizza.png",
                    "describe": "Perreroni pizza by werewolf pizza",
                    "materials": [
                        {
                            "name": 'flour',
                            "text": '500g'
                        },
                        {
                            "name": 'Kosher or Sea Salt',
                            "text": '16g'
                        },
                        {
                            "name": 'Instant Dry Yeast',
                            "text": '1g'
                        },
                        {
                            "name": 'Water',
                            "text": '350g'
                        },
                        {
                            "name": 'Sauce',
                            "text": '6 tbsp of extra virigin olice oil, 1 tsp of white sugar,1 tsp of MSG'
                        },
                        {
                            "name": 'Toppings',
                            "text": 'Shredded Marble Cheddar, Pepperoni'
                        },
                    ],
                    "steps": [
                        {
                            "name": '1',
                            "text": 'In a suitable bowl,mix in the flour, salt,and yeast'
                        },
                        {
                            "name": '2',
                            "text": 'Slowly add in water, with a wooden spoon and start mixing all the ingredients to combine. Mix until the consistency of your dough starts to look ‘shaggy’. Then let it rest for 15-20 minutes'
                        },
                        {
                            "name": '3',
                            "text": 'At this point, lightly oil your hands and pick up your loosely formed mass of dough. Then as best as you can, fold your dough 4 times into itself. Place the dough (seam side down) into your mixing bowl and cover tightly with plastic wrap.'
                        },
                        {
                            "name": '4',
                            "text": 'Leave your covered dough  to sit for 24 hours at room temperature. It should double in size and you’ll see bubbles start to form'
                        }
                    ]
                }, {
                    "type": "Meats",
                    "name": "Hot Chicken Fried Steak Sando",
                    "grade": 3.5,
                    "picture": "../../images/hotChicken.png",
                    "describe": "Hot Chicken Fried Steak Sando(MEGHAN ROBBINS CHEF-SUPERPOINT",
                    "materials": [
                        {
                            "name": 'For The Dredge',
                            "text": `200g All Purpose Flour<br/> 5g	Black Pepper<br/>10g Salt</br> 5gCayenne<br/>5g	Smoked Paprika<br/>5gOnion Powder</br>
                                5g Garlic Powder<br/>
                                3g Thyme<br/>
                                375g	Buttermilk<br/>
                                10g	Hot Sauce<br/>
                                100g	Panko/ Breadcrumbs`
							},
                {
                    "name": 'For the Gravy',
                    "text": ` 1pc Shallot, diced<br/>
                    75g	Butter<br/>
                    75g All Purpose Flour <br/>
                    400g Milk<br/>
                    1/2pc Lemon, Juice<br/>
                    10 Parsley Sprigs, chopped<br/>
                    4 Sliced Bread<br/>
                     `
                },
            ],
            "steps": [
                {
                    "name": '1',
                    "text": `Butterfly the pieces of steak. 
                    Lay between two pieces of parchment paper and pound flat (if you don’t have a mallet just use the bottom of a heavy pot or pan).`
                    
                },
                {
                    "name": '2',
                    "text": `Combine the AP flour with the first list of ingredients.
                     Mix together well, this will be the first part of your breading.
                    `
                },
                {
                    "name": '3',
                    "text": `In a separate bowl mix the buttermilk hot sauce, whisk together to combine `
                },
                {
                    "name": '4',
                    "text": `In another separate dish have the panko/ breadcrumbs.
                     Reserve any extra spiced flour as well, as you may want to add a little more kick to the final panko coating.
                     Take each piece of meat one at a time, and first dip in the spiced flour, then the buttermilk, then 


                   `
                }
            ]
        },{
            "type": "Veg",
            "name": "Graham's Pozole Verde",
            "grade": "3.1",
            "picture": "../../images/verde.png",
            "describe": "GRAHAM PRATT CHEF/OWNER - FORMERLY THE GABARDINECHEF - WOODHOUSE BREW PUB ",
            "materials": [
                {
                    "name": 'Part 1',
                    "text": `4 small servings or 2 Graham size servings
                    1/4 cup veg oil
                    2 guajillo chilis
                    2 ancho chilis
                    2 packages sazon goya con culantro y achiote
                    2 vegetarian bouillon cubes
                    1 tsp ground cumin
                    1 ½ tsp dried oregano-1 white onion (peeled)
                    8 garlic cloves (peeled)
                    -1/2 bunch culantro (or cilantro in you don’t
                    have)
                    6 trinidad pimentos (tops removed)
                    1 green pepper (top removed and deseeded)
                    `
                    },
        {
            "name": 'Part 2',
            "text": ` 
            
             3 whole habaneros (top removed)
             1 can La Constena whole tomatillos (1/2 the
             liquid drained out)
             1 can goya white hominy
             2 cups water
             salt/pepper to season
             `
        },
    ],
    "steps": [
        {
            "name": '1',
            "text": `Garnish
            Cut radishes, chopped white onion, shredded queso fresco, fresh lime, tajin, fried tortillas, pulled pork
            or chicken. Or keep vegetarian, whatever you want that makes sense!

            `
            
        },
        {
            "name": '2',
            "text": `Method
            In medium pot add oil and then all ingredients in first column. 
            Let cook on low until the chilis just start to release some colour (about 5 minutes on low). In a food processor puree all ingredients except tomatillos, hominy and water.
            
            `
        },
        {
            "name": '3',
            "text": `Add pureed mix to pot and cook on medium/medium low for about 10 minutes, mixture should start to
            show oil again and thicken. `
        },
        {
            "name": '4',
            "text": `While the base is cooking, pulse 
            puree the tomatillos until just broken down but not smooth. Add
            tomatillos, hominy and water. Remove dried chilis and discard. Cook on medium/medium low for about
            30 min stirring often.
            To serve ladle into bowls and garnish how you choose. Best eaten with a massive hangover.
           `
        }
    ]   
        }, {
            "type": "Seafood",
            "name": "Albacore Tuna ",
            "grade": "3.5",
            "picture": "../../images/tuna.png",
            "describe": "ALBACORE TUNA WITH BOK CHOY, TOFU, COCONUT BROTH AND ANISE ASH -BRENT MAXWELL CHEF - LA SOCIÉTÉ",
            "materials": [
                {
                    "name": 'Coconut Broth',
                    "text": `5500ml coconut milk Juice and zest of 1 lime <br/>
                    1 stick of lemongrass sliced<br/>
                    1 bunch of washed cilantro roots<br/>
                    10g sliced ginger<br/>
                    1 small Anaheim chili sliced<br/>
                    1 tsp coriander seeds <br/>
                    1 tsp white peppercorns 3 pieces of star anise Salt<br/>`
                },
                {
                  "name":"Others",
                  "text":`
                  1.Combine coconut milk, lemongrass, ginger, Anaheim chili, coriander seed, white peppercorn and star anise in a pot.<br/>
                  2.Bring to a simmer and remove from heat.<br/>
                  3.Add cilantro roots, lime juice and zest.<br/>
                  4.Wrap top in plastic wrap.<br/>
                  5.Steep for 20 minutes and strain.<br/>
                  6.Adjust seasoning while still warm.<br/>
                  7.Cool on ice.
                  `
                }               
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Place star anise on a small baking sheet and cook at high heat until fully burnt.'
                },
                {
                    "name": '2',
                    "text": 'Allow to cool.'
                },
                {
                    "name": '3',
                    "text": 'Grind in a coffee grinder or food processor until completely powdered.'
                },
                {
                    "name": '4',
                    "text": 'Store in airtight container. '
                }
            ]
        
        }, {
            "type": "ChinaType",
            "name": "Mui Chuy Kow Yuk",
            "grade": "2.7",
            "picture": "../../images/china.png",
            "describe": "This is a Chinese recipe",
            "materials": [
                {
                    "name": 'All',
                    "text": ` 
                    2 pounds|880 grams pork belly, cut  into 1 ½-inch pieces<br/>
                    1 pound|470 grams (2-inch) pork ribs, cut into individual ribs<br/>
                    1 pound|450 grams pork shoulder, cut into 1 ½-inch pieces<br/>
                    6 tablespoons|125 grams black bean sauce<br/>
                    3 tablespoons dark soy sauce<br/>
                    1 (10 ounce|300 grams) pack pickled sour mustard greens, coarsely chopped<br/>
                    1 cup|250 ml chicken broth<br/>
                    rice, for serving
                    
                          
                    `
                },
               
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'In a large saucepan, cover the pork belly, ribs, and shoulder with 2 cups|500 ml water and bring to a boil '
                },
                {
                    "name": '2',
                    "text": 'Stir in the black bean sauce and soy sauce, reduce the heat to maintain a simmer, and cook, stirring occasionally, until the liquid has reduced to a thick syrup, about 30 minutes '
                },
                {
                    "name": '3',
                    "text": 'Add in the chicken broth, reduce the heat to medium, and cover. <br/>Simmer until the pork is tender, about 1 hour. '
                },
                {
                    "name": '4',
                    "text": 'Stir in the mustard greens and cook for 5 minutes longer. <br/>Serve with rice.'
                }
            ]
        
        }, {
            "type": "Soup",
            "name": "Orleans Creole Gumbo",
            "grade": "3.9",
            "picture": "../../images/soup.png",
            "describe": "Serve over hot cooked rice. The gumbo can be frozen or refrigerated and many people like it better the next day. Bon appetit",
            "materials": [
                {
                    "name": 'All',
                    "text": `1 cup all-purpose flour<br/>
                    ¾ cup bacon drippings<br/>
                    1 cup coarsely chopped celery<br/>
                    1 large onion, coarsely chopped<br/>
                    1 large green bell pepper, coarsely chopped<br/>
                    2 cloves garlic, minced 1 pound andouille sausage, sliced<br/>
                    3 quarts water and 6 cubes beef bouillon<br/>
                    1 tablespoon white sugar<br/>
                    2 tablespoons hot pepper sauce (such as Tabasco®), or to taste<br/>
                    ½ teaspoon Cajun seasoning blend (such as Tony Chachere's®), or to taste<br/>
                    4 bay leaves and ½ teaspoon dried thyme leaves<br/>
                    1 (14.5 ounce) can stewed tomatoes<br/>
                    3 pounds uncooked medium shrimp, peeled and deveined<br/>
                    2 tablespoons Worcestershire sauce<br/>
                    `
                },
                
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Make a roux by whisking the flour and 3/4 cup bacon drippings together in a large, heavy saucepan over medium-low heat to form a smooth mixture. Cook the roux, whisking constantly, until it turns a rich mahogany brown color. This can take 20 to 30 minutes; watch heat carefully and whisk constantly or roux will burn. Remove from heat; continue whisking until mixture stops cooking.'
                },
                {
                    "name": '2',
                    "text": ' Place the celery, onion, green bell pepper, and garlic into the work bowl of a food processor, and pulse until the vegetables are very finely chopped. Stir the vegetables into the roux, and mix in the sausage. Bring the mixture to a simmer over medium-low heat, and cook until vegetables are tender, 10 to 15 minutes. Remove from heat, and set aside'
                },
                {
                    "name": '3',
                    "text": 'Bring the water and beef bouillon cubes to a boil in a large Dutch oven or soup pot. Stir until the bouillon cubes dissolve, and whisk the roux mixture into the boiling water. Reduce heat to a simmer, and mix in the sugar, salt, hot pepper sauce, Cajun seasoning, bay leaves, thyme, stewed tomatoes, and tomato sauce. Simmer the soup over low heat for 1 hour; mix in 2 teaspoons of file gumbo powder at the 45-minute mark.'
                },
                {
                    "name": '4',
                    "text": 'Meanwhile, melt 2 tablespoons of bacon drippings in a skillet, and cook the okra with vinegar over medium heat for 15 minutes; remove okra with slotted spoon, and stir into the simmering gumbo. Mix in crabmeat, shrimp, and Worcestershire sauce, and simmer until flavors have blended, 45 more minutes. Just before serving, stir in 2 more teaspoons of file gumbo powder.'
                }
            ]
        
        }, {
            "type": "Desserts",
            "name": "Cheese Cake Cup",
            "grade": "3.8",
            "picture": "../../images/cake.png",
            "describe": "Very easy recipe that can be made with kids. Top with chocolate chips or cherry pie filling, if you like.",
            "materials": [
                {
                    "name": 'All',
                    "text": `16 vanilla wafer cookies <br/>
                    2 (8 ounce) packages cream cheese, softened <br/>
                    ¾ cup white sugar <br/>
                    2 eggs<br/>
                    1 teaspoon vanilla extract<br/>
                    `
                },
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'In a suitable bowl,mix in the flour, salt,and yeastPreheat oven to 350 degrees F (175 degrees C). Line muffin pans with cupcake papers.'
                },
                {
                    "name": '2',
                    "text": 'Place one wafer cookie in the bottom of each cupcake paper. In a medium bowl, cream together cream cheese and sugar.'
                },
                {
                    "name": '3',
                    "text": 'Beat in eggs and vanilla until smooth. Pour over wafers in cupcake papers.'
                },
                {
                    "name": '4',
                    "text": 'Bake in preheated oven 15 minutes, until golden and set.'
                }
            ]
        

        }, {
            "type": "Pasta",
            "name": "Lighter Chicken Fettuccine Alfredo",
            "grade": "3.2",
            "picture": "../../images/pasta.png",
            "describe": "This version of chicken fettuccine alfredo is lightened by substituting some of the heavy cream with chicken broth.",
            "materials": [
                {
                    "name": 'All',
                    "text": ` 2 large boneless skinless chicken breasts<br/>
                    2 cups low-sodium chicken broth<br/>
                    4 cloves garlic, minced<br/>
                    ground black pepper to taste<br/>
                    2 cups heavy cream<br/>
                    2 egg yolks<br/>
                    salt to taste<br/>
                    1 pound fettuccine<br/>
                    1 sprig chopped fresh parsley<br/>
                    2 cups freshly grated Parmigiano-Reggiano cheese, divided<br/>


                    `
                },
                
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Combine chicken breasts and chicken broth in a saucepan over medium-high heat. Bring to a boil, cover, and reduce heat to low; simmer for 5 minutes. Turn breasts, cover, and simmer another 5 minutes. Remove from heat and let sit with the cover on for 15 minutes.'
                },
                {
                    "name": '2',
                    "text": 'Remove chicken breasts from the broth and set aside to cool, reserving the broth in the saucepan. Once the chicken is cool enough to handle, cut into bite-size slices.'
                },
                {
                    "name": '3',
                    "text":`Return the chicken broth to medium heat and cook until reduced to 1 cup.
                    Stir garlic, black pepper, and heavy cream into the reduced broth; bring to a simmer and remove from heat.
                    Whisk egg yolks in a bowl until smooth. Beat 1 tablespoon of the warm cream mixture into the eggs until thoroughly incorporated; 
                    repeat until about 1/2 cup of the warm cream mixture is used.
                    `
                },
                {
                    "name": '4',
                    "text": `Whisk the warm cream and egg mixture back into the saucepan with the remaining cream mixture. Cook over medium-low heat, whisking constantly, until the mixture almost comes to a simmer and thickens, about 5 minutes. Season with salt and black pepper to taste.
                    Bring a large pot of lightly salted water to a boil. Cook fettuccine in boiling water, stirring occasionally, until nearly cooked through, about 7 minutes. Drain.
                    Stir parsley, 1 cup of Parmigiano-Reggiano, and cream mixture into the pasta. Remove from heat, cover, and let sit for a few minutes until thick Fold chicken and 1 cup Parmigiano-Reggiano into the pasta mixture to serve.
                   `
                
                }
            ]
        
        }, {
            "type": "Korean ",
            "name": "Korean Chicken Wings",
            "grade": "3.5",
            "picture": "../../images/wing.png",
            "describe": "These Korean-style air-fried wings are crispy, sticky and spicy. Cooked in an air fryer they are ready in less than 30 minutes. They are perfect as an appetizer or add some rice and veggies on the side and you have a balanced meal.",
            "materials": [
                {
                    "name": 'Sauce',
                    "text": `¼ cup hot honey and 3 tablespoons gochujang (Korean hot pepper paste) <br/>
                    1 tablespoon brown sugar.
                    1 tablespoon soy sauce and 1 teaspoon lemon juice.
                    2 teaspoons minced garlic and 1 teaspoon minced fresh ginger root.
                    ½ teaspoon salt.
                    ¼ teaspoon black pepper .
                    ¼ cup finely chopped green onions (green part only)

                    `
                },
                {
                    "name": 'Wings',
                    "text": `2 pounds chicken wings and 1 teaspoon salt.
                    1 teaspoon garlic powder.
                    1 teaspoon onion powder.
                    ½ teaspoon black pepper.
                    ½ cup cornstarch.

                    `
                },
                {
                    "name": 'Garnish',
                    "text": '2 tablespoons chopped green onions and 1 teaspoon sesame seeds '
                },
            
            ],
            "steps": [
                {
                    "name": '1',
                    "text": `Combine hot honey, gochujang, brown sugar, soy sauce, lemon juice, garlic, ginger, salt, and black pepper in a saucepan. 
                    Bring sauce to a boil over medium heat, reduce heat, and simmer for 5 minutes. 
                    Add green onions and stir.Preheat air fryer to 400 degrees F (200 degrees C).
                    `
                },
                {
                    "name": '2',
                    "text": 'Place wings in a large bowl and toss with salt, garlic powder, onion powder and black pepper. Add cornstarch and toss wings until fully coated. Shake each wing and place in the air fryer basket, making sure they are not touching; cook in batches if necessary.'
                },
                {
                    "name": '3',
                    "text": 'Fry in the preheated air fryer for 10 minutes, shake basket, and fry an additional 10 minutes. Flip wings over and fry until chicken is cooked through and juices run clear, 7 to 8 more minutes.'
                },
                {
                    "name": '4',
                    "text": 'Dip each wing in the sauce and garnish with chopped green onions and sesame seeds. Serve with remaining sauce on the side.'
                }
            ]
        
        }, {
            "type": "Pasta",
            "name": "Sicilian Spaghetti",
            "grade": "3.5",
            "picture": "../../images/noodle.png",
            "describe": "If you love anchovies and pasta, this recipe is for you. It's quick, easy and very tasty. Serve with crusty Italian bread, if desired.",
            "materials": [
                {
                    "name": 'All',
                    "text": `1 pound spaghetti and 4 tablespoons olive oil 
                    3 cloves garlic, crushed.
                    1 (2 ounce) can anchovy fillets, chopped.
                    1 cup fine bread crumbs.
                    1 cup chopped fresh parsley.
                    ground black pepper to taste.
                    4 tablespoons freshly grated Parmesan cheese
                    `
                },
                
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Bring a large pot of lightly salted water to a boil. Add pasta and cook for 8 to 10 minutes or until al dente; drain.'
                },
                {
                    "name": '2',
                    "text": 'Meanwhile, in a medium skillet, heat olive oil over medium heat and add garlic and anchovies to cook for about 2 minutes; stir constantly.'
                },
                {
                    "name": '3',
                    "text": 'Stir in breadcrumbs and turn off heat. Add parsley and black ground pepper; mix together.'
                },
                {
                    "name": '4',
                    "text": 'Toss anchovy sauce with hot pasta and sprinkle with cheese; serve.'
                }
            ]
        
        }, {
            "type": "Meats",
            "name": "Sausage-Stuffed Cherry Pepper Poppers",
            "grade": "3.5",
            "picture": "../../images/ss.png",
            "describe": "These things are the best beer food ever. They're almost too easy to make.",
            "materials": [
                {
                    "name": 'All',
                    "text": `½ pound Italian sausage, casings removed.
                    2 (14 ounce) jars pickled red peppers (such as Peppadew®), drained.
                    2 teaspoons olive oil, divided.
                    1 teaspoon chopped fresh parsley (Optional).

                    `
                },
                
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Preheat oven to 375 degrees F (190 degrees C). Line 2 pie plates with aluminum foil.'
                },
                {
                    "name": '2',
                    "text": 'Pinch about 1/2 teaspoon sausage off and roll into a small oval shape. Stuff the sausage piece into a pepper. Repeat with remaining sausage and peppers.'
                },
                {
                    "name": '3',
                    "text": 'Drizzle 1 teaspoon olive oil into each foil-lined pie plate and divide the stuffed peppers into each one. Rotate the plates to roll and coat poppers in the oil.'
                },
                {
                    "name": '4',
                    "text": 'Roast poppers in the preheated oven until the sausage is cooked through and the poppers are very slightly dried out, about 20 minutes. Let cool before serving. Arrange onto a serving platter and sprinkle with parsley.'
                }
            ]
        
        }, {
            "type": "Meat",
            "name": "Red Curry Flank Steak",
            "grade": "3.5",
            "picture": "../../images/steak.png",
            "describe": "basically chunks of beef stew meat cooked slowly in a spicy, aromatic red curry sauce. ",
            "materials": [
                {
                    "name": 'All',
                    "text": `¼ cup seasoned rice vinegar.
                    3 tablespoons fish sauce.
                    1 tablespoon freshly grated ginger.
                    3 cloves garlic, crushed and 1 teaspoon hot sauce.
                    1 teaspoon red curry powder and ½ teaspoon red curry paste.
                    1 (1 1/2-pound) flank steak.
                    1 bunch fresh basil.
                    `
                },
                
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Whisk rice vinegar, fish sauce, grated ginger, garlic, hot sauce, red curry powder, and red curry paste in a shallow dish. Set aside.'
                },
                {
                    "name": '2',
                    "text": 'Puncture flank steak several times with a fork and place in the vinegar mixture. Cover and marinate at room temperature for 1 hour.'
                },
                {
                    "name": '3',
                    "text": 'Preheat an outdoor grill for high heat, and lightly oil the grate.'
                },
                {
                    "name": '4',
                    "text": 'Place steak on the grill and basil on top of steak. Grill steak for 6 minutes. Remove basil, turn meat over, and place basil back on top of steak. Cook the steak until it begins to firm and is hot and slightly pink in the center, about 6 more minutes. An instant-read thermometer inserted into the center should read 130 degrees F (54 degrees C).'
                }
            ]
        
        }, {
            "type": "Seafood",
            "name": "Tilapia with Dill Sauce",
            "grade": "3.5",
            "picture": "../../images/sea.png",
            "describe": "Baked tilapia seasoned with Cajun and citrus served with a creamy sauce of fresh dill and lemon.",
            "materials": [
                {
                    "name": 'All',
                    "text": `4 (4 ounce) fillets tilapia.
                    salt and pepper to taste.
                    1 tablespoon Cajun seasoning, or to taste.
                    1 lemon, thinly sliced and ¼ cup mayonnaise.
                    ½ cup sour cream and ⅛ teaspoon garlic powder.
                    1 teaspoon fresh lemon juice and 2 tablespoons chopped fresh dill.


                    `
                },
    
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Preheat the oven to 350 degrees F (175 degrees C). Lightly grease a 9x13 inch baking dish.'
                },
                {
                    "name": '2',
                    "text": 'Season the tilapia fillets with salt, pepper and Cajun seasoning on both sides. Arrange the seasoned fillets in a single layer in the baking dish. Place a layer of lemon slices over the fish fillets. I usually use about 2 slices on each piece so that it covers most of the surface of the fish.'
                },
                {
                    "name": '3',
                    "text": 'Bake uncovered for 15 to 20 minutes in the preheated oven, or until fish flakes easily with a fork.'
                },
                {
                    "name": '4',
                    "text": 'While the fish is baking, mix together the mayonnaise, sour cream, garlic powder, lemon juice and dill in a small bowl. Serve with tilapia.'
                }
            ]
        
        }, {
            "type": "Drink",
            "name": "Whiskey Drink",
            "grade": "3.5",
            "picture": "../../images/drink.png",
            "describe": "One of the great classic bourbon cocktails, the Old Fashioned was invented in Louisville, KY. Try bourbon, rye, or a blended whiskey in this cocktail. You can also sub one sugar cube for the simple syrup.",
            "materials": [
                {
                    "name": 'All',
                    "text": ` 2 teaspoons simple syrup and 1 teaspoon water.
                    2 dashes bitters and 1 cup ice cubes.
                    1 (1.5 fluid ounce) jigger bourbon whiskey.
                    1 slice orange and 1 maraschino cherry.
                    `
                },
                
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Pour the simple syrup, water, and bitters into a whiskey glass.'
                },
                {
                    "name": '2',
                    "text": 'Stir to combine, then place the ice cubes in the glass'
                },
                {
                    "name": '3',
                    "text": 'Pour bourbon over the ice'
                },
                {
                    "name": '4',
                    "text": ' garnish with the orange slice and maraschino cherry.'
                }
            ]
        
        }, {
            "type": "Soup",
            "name": "French Onion Soup",
            "grade": "3.5",
            "picture": "../../images/s.png",
            "describe": "We have been trying French onion soup in restaurants for years and my family and friends agree none can compare to my recipe for taste and simplicity of preparation.",
            "materials": [
                {
                    "name": 'All',
                    "text": `½ cup unsalted butter and 2 tablespoons olive oil .<br/>
                    4 cups sliced onions and 4 (10.5 ounce) cans beef broth. <br/>
                    2 tablespoons dry sherry.<br/>
                    1 teaspoon dried thyme.<br/>
                    1 pinch salt and pepper to taste.<br/>
                    4 slices French bread.<br/>
                    4 slices provolone cheese.<br/>
                    2 slices Swiss cheese, diced.<br/>
                    ¼ cup grated Parmesan cheese .<br/>

                    `
                },
                
            ],
            "steps": [
                {
                    "name": '1',
                    "text": 'Melt butter with olive oil in an 8 quart stock pot on medium heat. Add onions and continually stir until tender and translucent. Do not brown the onions.'
                },
                {
                    "name": '2',
                    "text": 'Add beef broth, sherry and thyme. Season with salt and pepper, and simmer for 30 minutes.'
                },
                {
                    "name": '3',
                    "text": 'Heat the oven broiler'
                },
                {
                    "name": '4',
                    "text": ''
                }
            ]
        
        }, 
                ]
                ,

    }
},
    methods: {
    // Return to previous 
    rollBackBtn() {
        this.showList = true;
        this.showInfo = false;
        this.showPrint = false;
    },
    rollBackPrintBtn() {
        this.showInfo = true;
        this.showPrint = false;
        this.showList = false;
        this.itemInfo = item;
    },
    showInfoBtn(item) {

        this.showPrint = false;
        this.showList = false;
        //this.itemInfo = item;
        console.log('this', this)
        this.$set(this, 'itemInfo', item)
        this.showInfo = true;

        console.log('this.itemInfo', this.itemInfo)
    },
    showSaveBtn() {
        this.showSave = true
    },
    showPrintBtn() {
        this.showPrint = true;
        this.showList = false;
        this.showInfo = false;
    }
},
    created(){

}
    })