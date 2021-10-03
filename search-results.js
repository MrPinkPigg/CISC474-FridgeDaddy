

const ingredients = [ "Olive oil", "All purpose flour", "Butter", "Chicken",
    "Sugar", "Salt", "Egg", "Rice", "Vegetable oil", "Pork", "Beef", "Cheese", "Garlic", "Orange",
    "Turkey", "Onion", "Corn", "Whole milk", "Mayonnaise", "Chiles", "Almonds", "Bacon",
    "Mushrooms", "Coconut", "Beets", "Strawberries", "Fennel", "Lamb", "Apple", "Shrimp"]
var basket = []

function myCreateFunction() {
    var table = document.getElementById("myTable");
    var basket_table = document.getElementById("basket-table");
    var term = JSON.parse(localStorage.getItem("search"));
    if(term != null && ingredients.includes(term)) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = term;
    }

    for(var i = 0; i < ingredients.length; i++) {
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(-1);
        cell1.innerHTML = ingredients[i];
    }

    var btns = document.querySelectorAll('td');
    for (var i = 0; i < btns.length; i++) {
	    btns[i].addEventListener('click', function (event) {
            if(!basket.includes(this.innerHTML)) {
                basket.push(this.innerHTML);
                var row = basket_table.insertRow(-1);
                var cell2 = row.insertCell(-1);
                cell2.innerHTML = this.innerHTML;
            }
		    console.log(basket);
	    }, false);
    }

}

document.addEventListener('DOMContentLoaded', function() {
    myCreateFunction();
}, false);