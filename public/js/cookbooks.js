if (localStorage.getItem("uid") == null) {
    location.href="signIn"
}
else {
    var arr = [localStorage.getItem("uid")];
    console.log(arr);
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/cookbookList?uid=' + localStorage.getItem("uid"),
        // data: JSON.stringify(arr),
        // contentType: "application/json",
        success: function(res) {
            populateCookbooks(res);
        },
        error: function(xhr, status, err) {
           console.log(xhr.responseText);
        }
     });
}

function populateCookbooks(obj) {
    console.log(obj);
    var parent = document.getElementById("cookbooks-container");
        //var jsonFile = JSON.parse(obj);
        // var i = 0;
        // for(var key in obj) {
        //     //console.log(obj[key].Cookbook.CookbookDesc);
        //     for(var i = 0; i < obj[key].Cookbook.Recipes.length; i++) {
        //         console.log(obj[key].Cookbook.Recipes[i]);
        //     }
        // }

        for(var key in obj) {
            var div = document.createElement("div");
            div.classList.add("col-md-4");
            console.log(obj[key]);
            var cookbookName = obj[key].Cookbook.CookbookName;
            var cookbookDesc = obj[key].Cookbook.CookbookDesc;
            var numRecipes = obj[key].Cookbook.Recipes.length - 1;

            var cookbookDiv = '<div class="card mb-4 box-shadow">' + '<img class="card-img-top" src="/public/images/cookbook.jpeg" alt="Image of a cookbook">' + '<div class="card-body">' + '<h5 class="card-title">' + cookbookName + '</h5>' + '<p class="card-text">' + cookbookDesc + '<div class="d-flex justify-content-between align-items-center">' + '<div class="btn-group">' + '<button onclick="myFun(this.id)" id="' + cookbookName + '" type="button" class="btn btn-sm btn-outline-secondary view-cookbook-button">View' + '</button>' + '<button onclick="deleteCookbook(this.id)" id="' + cookbookName + '" type="button" class="btn btn-sm btn-outline-secondary">Delete' + '</button>' + '</div>' + '<small class="text-muted">' + numRecipes +  ' recipes</small>' + '</div>' + '</div>' + '</div>' + '</div>'

            div.innerHTML = cookbookDiv;
            parent.appendChild(div);
        }
        // for (var i = 0; i < cookbook.length; i++) {
        //     var div = document.createElement("div");
        //     div.classList.add("col-md-4");
        //     var cookbookName = cookbook[i].CookbookName;
        //     var cookbookDesc = cookbook[i].CookbookDesc;
        //     console.log(cookbookName);
        //     console.log(cookbookDesc);
        // }

        // snap.forEach(function (childNodes) {
        //     var div = document.createElement("div");
        //     div.classList.add("col-md-4");
        //     var cookbookName = childNodes.key;
        //     var cookbookDesc = childNodes.val().CookbookDesc;

        //     var cookbookDiv = '<div class="card mb-4 box-shadow">' + '<img class="card-img-top" src="../../images/cookbook.jpeg" alt="Image of a cookbook">' + '<div class="card-body">' + '<h5 class="card-title">' + cookbookName + '</h5>' + '<p class="card-text">' + cookbookDesc + '<div class="d-flex justify-content-between align-items-center">' + '<div class="btn-group">' + '<button onclick="myFun(this.id)" id="' + cookbookName + '" type="button" class="btn btn-sm btn-outline-secondary view-cookbook-button">View' + '</button>' + '<button type="button" class="btn btn-sm btn-outline-secondary">Delete' + '</button>' + '</div>' + '<small class="text-muted">0 recipes</small>' + '</div>' + '</div>' + '</div>' + '</div>'

        //     div.innerHTML = cookbookDiv;
        //     parent.appendChild(div);
        // });
}

function myFun(id) {
    localStorage.setItem("cookbook_name", JSON.stringify(id));
    location.href="viewcookbook"
}

function deleteCookbook(id) {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/cookbookDelete?uid=' + localStorage.getItem("uid") + "&recipeName=" + id,
        success: function(res) {
            console.log("delete success");
        },
        error: function(xhr, status, err) {
           console.log(xhr.responseText);
        }
     });
    location.reload();
}