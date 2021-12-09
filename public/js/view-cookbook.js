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
                        console.log(recipeObj[i].name)
                        document.getElementById('list').innerHTML += '<div class="card mb-3" style="width: 18rem;" id="'+recipeObj[i].name+'"><img src="' + recipeObj[i].image + '" class="card-img-top" alt="..."><div class="card-body">' +
                        '<h5 class="card-title"><a href="/recipe" class="stretched-link link-dark" style="text-decoration: none;">' + recipeObj[i].name + '</a></h5><p class="card-text">' + recipeObj[i].description + '</p></div></div>';
                    }
                }
            }
        }
    }

    const element = document.querySelectorAll(".card");
    for (var i = 0; i < element.length; i++) {
        element[i].addEventListener('click', function(event) {
            localStorage.setItem("recipe_name", JSON.stringify(this.id));
        });
    }

}