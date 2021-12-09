$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/cookbookList',
    success: function (cookbookRes) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/recipes',
            success: function (recipeRes) {
                generate(cookbookRes, recipeRes);
            },
            error: function (xhr, status, err) {
                console.log(xhr.responseText);
            }
        });
    },
    error: function (xhr, status, err) {
        console.log(xhr.responseText);
    }
});

function generate(cookbookObj, recipeObj) {
    var name = JSON.parse(localStorage.getItem("cookbook_name"));

    for (var key in cookbookObj) {
        console.log(cookbookObj[key].Cookbook.CookbookName);
        if (cookbookObj[key].Cookbook.CookbookName == name) {
            for (var i = 0; i < cookbookObj[key].Cookbook.Recipes.length; i++) {
                console.log(cookbookObj[key].Cookbook.Recipes[i]);
                for (var i = 0; i < recipeObj.length; i++) {
                    if (cookbookObj[key].Cookbook.Recipes[i] == recipeObj[i].name) {
                        document.getElementById('title').innerHTML = recipeObj[i].name;
                        document.getElementById('description').innerHTML = recipeObj[i].description;
                        document.getElementById('image').innerHTML = '<img src="' + recipeObj[i].image + '" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500"></img>';

                        for (var j = 0; j < recipeObj[i].step.length; j++) {
                            document.getElementById('directions').innerHTML += '<p>' + recipeObj[i].step[j].description + '</p>'
                        }
                        if (recipeObj[i].hasOwnProperty('ingredient')) {
                            for (var k = 0; k < obj[i].ingredient.length; k++) {
                                document.getElementById('ingredients').innerHTML += '<p id="' + k + '"></p>';
                                if (recipeObj[i].ingredient[k].hasOwnProperty('amount')) {
                                    document.getElementById(k.toString()).innerHTML += recipeObj[i].ingredient[k].amount + ' ';
                                } if (recipeObj[i].ingredient[k].hasOwnProperty('unit')) {
                                    document.getElementById(k.toString()).innerHTML += recipeObj[i].ingredient[k].unit + ' ';
                                } if (recipeObj[i].ingredient[k].hasOwnProperty('name')) {
                                    document.getElementById(k.toString()).innerHTML += recipeObj[i].ingredient[k].name + ' ';
                                } if (recipeObj[i].ingredient[k].hasOwnProperty('preparation')) {
                                    document.getElementById(k.toString()).innerHTML += recipeObj[i].ingredient[k].preparation + ' ';
                                }
                            }
                        } else if (recipeObj[i].hasOwnProperty('ingredientGroup')) {
                            var adjust = 0;
                            var total = 0;
                            for (var x = 0; x < recipeObj[i].ingredientGroup.length; x++) {
                                document.getElementById('ingredients').innerHTML += '<h5>' + obj[i].ingredientGroup[x].name + '</h5>';
                                for (var y = 0; y < recipeObj[i].ingredientGroup[x].ingredient.length; y++) {
                                    total = y + adjust;
                                    document.getElementById('ingredients').innerHTML += '<p id="' + total + '"></p>';
                                    if (recipeObj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('amount')) {
                                        document.getElementById(total.toString()).innerHTML += recipeObj[i].ingredientGroup[x].ingredient[y].amount + ' ';
                                    } if (recipeObj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('unit')) {
                                        document.getElementById(total.toString()).innerHTML += recipeObj[i].ingredientGroup[x].ingredient[y].unit + ' ';
                                    } if (recipeObj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('name')) {
                                        document.getElementById(total.toString()).innerHTML += recipeObj[i].ingredientGroup[x].ingredient[y].name + ' ';
                                    } if (recipeObj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('preparation')) {
                                        document.getElementById(total.toString()).innerHTML += recipeObj[i].ingredientGroup[x].ingredient[y].preparation + ' ';
                                    }
                                    adjust++;
                                }
                            }
                        }
                        break;
                    }
                }
            }
        }
    }

}