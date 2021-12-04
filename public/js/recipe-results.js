var ing_list;
window.onload = function() {
    ing_list = JSON.parse(localStorage.getItem("ing_list"))
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/recipes',
        success: function(res) {
            makeCards(res);
        },
        error: function(xhr, status, err) {
           console.log(xhr.responseText);
        }
     });
 }

/*
    Makes the cards for the results page.
    Iterates through the ingredients list sotred in localstorage, and compares to the res
    from the server. Creates a map to track if the recipe has the ingredient from localstorage.
    Sort this map, convert to array, then  make cards
*/

function makeCards(obj) {
    var cards = []
    const cardMap = new Map();
    
    for(var j = 0; j < ing_list.length; j++) {
        for(var i = 0; i < obj.length; i++) {
            if(obj[i].tag.includes(ing_list[j])) {
                if(!cardMap.has(obj[i].name)) {
                    cardMap.set(obj[i].name, 1);
                } else {
                    cardMap.set(obj[i].name, cardMap.get(obj[i].name) + 1);
                }
            }
        }
    }

    const mapSort = new Map([...cardMap.entries()].sort((a, b) => b[1] - a[1]));
    for (let key of mapSort.keys()) {
        cards.push(key);
    }

    for(var i = 0; i < cards.length; i++) {
        for(var j = 0; j < obj.length; j++) {
            if(obj[j].name == cards[i]) {
                document.getElementById('list').innerHTML += '<div class="card mb-3" style="width: 18rem;" id="'+obj[j].name+'"><img src="' + obj[j].image + '" class="card-img-top" alt="..."><div class="card-body">' +
                '<h5 class="card-title"><a href="/recipe" class="stretched-link link-dark" style="text-decoration: none;">' + obj[j].name + '</a></h5><p class="card-text">' + obj[j].description + '</p></div></div>';
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