$.ajax({
    type: 'GET',
    url: 'http://localhost:3000/recipes',
    success: function (res) {
        populateRecipes(res);
        console.log("success");
    },
    error: function (xhr, status, err) {
        console.log(xhr.responseText);
    }
});

function addCookbook() {
    var cookbookName = document.getElementById("cookbook_name").value;
    var cookbookDesc = document.getElementById("cookbook_desc").value;
    var recipes = document.getElementById("recipe-select").value;

    var selected = [];
    selected.push(cookbookName);
    selected.push(cookbookDesc);
    for (var option of document.getElementById("recipe-select").options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/cookbooks',
        data: JSON.stringify(selected),
        contentType: "application/json",
        
        success: function (res) {
            console.log("post success");
        },
        error: function (xhr, status, err) {
            console.log(xhr.responseText);
        }
    });

    console.log(selected);
}

function populateRecipes(recipes) {

    var parent = document.getElementById("recipe-select");
    for (var i = 0; i < recipes.length; i++) {
        const newOption = document.createElement("option");
        const recipeName = recipes[i].name;
        const optionText = document.createTextNode(recipeName);
        newOption.appendChild(optionText);
        parent.appendChild(newOption);
    }
}