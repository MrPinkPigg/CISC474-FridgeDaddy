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

function makeCards(obj) {
    var cards = []

    for(var i = 0; i < obj.length; i++) {
        if(obj[i].tag.some(r=> ing_list.indexOf(r) >= 0)) {
            if(!cards.includes(obj[i].name)) {
                cards.push(obj[i].name);
            } else {
                cards.splice(cards.indexOf(obj[i].name), 1);
                cards.unshift(obj[i].name);
            }
        }
    }
    console.log(cards);
    for(var i = 0; i < cards.length; i++) {
        for(var j = 0; j < obj.length; j++) {
            if(obj[j].name == cards[i]) {
                document.getElementById('list').innerHTML += '<div class="card mb-3" style="width: 18rem;"><img src="' + obj[j].image + '" class="card-img-top" alt="..."><div class="card-body">' +
                '<h5 class="card-title"><a href="/recipe" class="stretched-link link-dark" style="text-decoration: none;">' + obj[j].name + '</a></h5><p class="card-text">' + obj[j].description + '</p></div></div>';
            }
        }
    }
}

