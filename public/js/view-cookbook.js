var cookbookResGlobal;
$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/cookbookList?uid=' + localStorage.getItem("uid"),
    success: function (cookbookRes) {
        cookbookResGlobal = cookbookRes;
    },
    error: function (xhr, status, err) {
        console.log(xhr.responseText);
    }
});

$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/recipes',
    success: function (recipeRes) {
        generate(cookbookResGlobal, recipeRes);
    },
    error: function (xhr, status, err) {
        console.log(xhr.responseText);
    }
});

function generate(cookbookObj, recipeObj) {
    var cookbookNameLS = JSON.parse(localStorage.getItem("cookbook_name"));
    for (var key in cookbookObj) {
        console.log(cookbookObj[key].Cookbook.CookbookName);
        if (cookbookObj[key].Cookbook.CookbookName == cookbookNameLS) {
            console.log(cookbookNameLS);
            for (var i = 0; i < cookbookObj[key].Cookbook.Recipes.length; i++) {
                //console.log(cookbookObj[key].Cookbook.Recipes[i]);
                for (var j = 0; j < recipeObj.length; j++) {
                    //console.log(recipeObj.length);
                    //console.log(cookbookObj[key].Cookbook.Recipes[i] + ", " + recipeObj[i].name);
                    if (cookbookObj[key].Cookbook.Recipes[i] == recipeObj[j].name) {
                        document.getElementById('list').innerHTML += '<div class="card mb-3" style="width: 18rem;" id="' + recipeObj[j].name + '"><img src="' + recipeObj[j].image + '" class="card-img-top" alt="..."><div class="card-body">' +
                            '<h5 class="card-title"><a href="/recipe" class="stretched-link link-dark" style="text-decoration: none;">' + recipeObj[j].name + '</a></h5><p class="card-text">' + recipeObj[j].description + '</p></div></div>';
                    }
                }
            }
        }
    }

    const element = document.querySelectorAll(".card");
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function (event) {
            localStorage.setItem("recipe_name", JSON.stringify(this.id));
        });
    }

}