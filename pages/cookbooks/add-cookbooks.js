function addCookbook() {
    var db = firebase.database();
    var cookbookName = document.getElementById("cookbook_name").value;
    var cookbookDesc = document.getElementById("cookbook_desc").value;
    var recipes = document.getElementById("recipe-select").value;

    var selected = [];
    for (var option of document.getElementById("recipe-select").options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }

    db.ref("mycookbooks/" + cookbookName).set({
        CookbookDesc: cookbookDesc,
        Recipes: "Recipes"
    });


    for (var i = 0; i < selected.length; i++) {
        db.ref("mycookbooks/" + cookbookName + "/Recipes").push({
            Recipe : selected[i]
        });
    }

    console.log(selected);
}

function populateRecipes() {
    var parent = document.getElementById("recipe-select");
    firebase.database().ref("recipes/recipe").on('value', function (snap) {
        snap.forEach(function (childNodes) {
            const newOption = document.createElement("option");
            const recipeName = childNodes.val().id;
            const optionText = document.createTextNode(recipeName);
            newOption.appendChild(optionText);
            parent.appendChild(newOption);
        });
    });
}