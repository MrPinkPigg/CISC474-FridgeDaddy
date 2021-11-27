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
        if(!cards.includes(obj[i].name)) {
            if(obj[i].tag.some(r=> ing_list.indexOf(r) >= 0)) {
                cards.push(obj[i].name);
                document.getElementById('list').innerHTML += '<div class="card" style="width: 18rem;"><img src="' + obj[i].image + '" class="card-img-top" alt="..."><div class="card-body">' +
                  '<h5 class="card-title"><a href="#" class="stretched-link link-dark" style="text-decoration: none;">' + obj[i].name + '</a></h5><p class="card-text">' + obj[i].description + '</p></div></div>';
            }
        }
    }
}

