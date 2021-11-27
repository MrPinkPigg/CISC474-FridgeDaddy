window.onload = function() {
    var ing_list = JSON.parse(localStorage.getItem("ing_list"))
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/recipes',
        success: function(res) {

        },
        error: function(xhr, status, err) {
           console.log(xhr.responseText);
        }
     });
 }

function makeCards(obj) {
    for(var i = 0; i < obj.recipe.length; i += 3) {
        document.getElementById("list").innerHTML += '<div class="row" style="margin-left: 9em; margin-right: 9em;" ><div class="card-group"><div class="card"><img style="height: 18em !important;" src="' 
            + obj.recipe[i].image +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' 
            + obj.recipe[i].name + '</h5><p class="card-text">' + obj.recipe[i].description  + '</p></div><div class="card-footer text-center"><a href="#" class="btn btn-success">View</a></div></div><div class="card"><img style="height: 18em !important;" src="' 
            + obj.recipe[i + 1].image +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' 
            + obj.recipe[i + 1].name + '</h5><p class="card-text">' + obj.recipe[i + 1].description  + '</p></div><div class="card-footer text-center"><a href="#" class="btn btn-success">View</a></div></div><div class="card"><img style="height: 18em !important;"src="'
            + obj.recipe[i + 2].image +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'
            + obj.recipe[i + 2].name + '</h5><p class="card-text">' + obj.recipe[i + 2].description  + '</p></div><div class="card-footer text-center"><a href="#" class="btn btn-success">View</a></div></div></div></div><br>';
    }
}

