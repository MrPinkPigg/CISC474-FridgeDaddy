// $.ajax({
//     type: 'GET',
//     url: 'http://localhost:3000/recipes',
//     success: function(res) {
//         generate(res);
//     },
//     error: function(xhr, status, err) {
//        console.log(xhr.responseText);
//     }
//  });

 function generate() {
    var name = JSON.parse(localStorage.getItem("cookbook_name"));

    firebase.database().ref("mycookbooks/").on('value', function (snap) {
        snap.forEach(function (childNodes) {
            if (name == childNodes.key) {
                firebase.database().ref("mycookbooks/" + childNodes.key + "/Recipes").on('value', function (snap1) {
                    
                });
            }
        });
    });

    for(var i = 0; i < obj.length; i++) {
        if(obj[i].name == name) {
            document.getElementById('title').innerHTML = obj[i].name;
            document.getElementById('description').innerHTML = obj[i].description;
            document.getElementById('image').innerHTML = '<img src="'+ obj[i].image +'" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500"></img>';

            for(var j = 0; j < obj[i].step.length; j++) {
                document.getElementById('directions').innerHTML += '<p>'+ obj[i].step[j].description +'</p>'
            }
            if(obj[i].hasOwnProperty('ingredient')) {
                for(var k = 0; k < obj[i].ingredient.length; k++) {
                    document.getElementById('ingredients').innerHTML += '<p id="'+ k +'"></p>';
                    if(obj[i].ingredient[k].hasOwnProperty('amount')) {
                        document.getElementById(k.toString()).innerHTML += obj[i].ingredient[k].amount + ' ';
                    } if(obj[i].ingredient[k].hasOwnProperty('unit')) {
                        document.getElementById(k.toString()).innerHTML += obj[i].ingredient[k].unit + ' ';
                    } if(obj[i].ingredient[k].hasOwnProperty('name')) {
                        document.getElementById(k.toString()).innerHTML += obj[i].ingredient[k].name + ' ';
                    } if(obj[i].ingredient[k].hasOwnProperty('preparation')) {
                        document.getElementById(k.toString()).innerHTML += obj[i].ingredient[k].preparation + ' ';
                    }
                }
            } else if(obj[i].hasOwnProperty('ingredientGroup')) {
                var adjust = 0;
                var total = 0;
                for(var x = 0; x < obj[i].ingredientGroup.length; x++) {
                    document.getElementById('ingredients').innerHTML += '<h5>'+ obj[i].ingredientGroup[x].name +'</h5>';
                    for(var y = 0; y < obj[i].ingredientGroup[x].ingredient.length; y++) {
                        total = y + adjust;
                        document.getElementById('ingredients').innerHTML += '<p id="'+ total+'"></p>';
                        if(obj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('amount')) {
                            document.getElementById(total.toString()).innerHTML += obj[i].ingredientGroup[x].ingredient[y].amount + ' ';
                        } if(obj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('unit')) {
                            document.getElementById(total.toString()).innerHTML += obj[i].ingredientGroup[x].ingredient[y].unit + ' ';
                        } if(obj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('name')) {
                            document.getElementById(total.toString()).innerHTML += obj[i].ingredientGroup[x].ingredient[y].name + ' ';
                        } if(obj[i].ingredientGroup[x].ingredient[y].hasOwnProperty('preparation')) {
                            document.getElementById(total.toString()).innerHTML += obj[i].ingredientGroup[x].ingredient[y].preparation + ' ';
                        }
                        adjust++;
                    }
                }
            }
            break;
        }
    }
}