// var allFridges = []

// const foodGroups = ['fruit', 'vegetable', 'grain', 'meat', 'fish', 'dairy']
var currentFridge = '';
var ingredients = [];
var collaborators = [];
var fruit = []
var vegetable = []
var grain = []
var meat = []
var fish = []
var dairy = []

function addFridge() {
    var fridge = document.createElement("fridge");
    fridge.src = '~/images/fridgeIcon.png';
    var className = "fridges";
    fridge.setAttribute("class", className);
    document.getElementById("fridgeIcons").appendChild(fridge);
    console.log("fridge added");
}

function selectFridge() {
    console.log("fridge selected");
}

function addImage(fridgeName){
    var table = document.getElementById("fridge-table")
    var emptyRow = document.getElementById("fridgeIcons");
    var fridgeColumn = document.getElementById("col1");
    currentFridge = fridgeName
    if(emptyRow){
        emptyRow.parentNode.removeChild(emptyRow);
    }
    var tr = fridgeColumn.appendChild(document.createElement('tr'));
    tr.innerHTML = "<a href='/public/pages/view-fridge.html' class='button'>" + currentFridge + "</a>";
    // tr.innerHTML = "<figure><img src='assets/fridgeIcon.png' name='fridgeImage' id=" + fridgeName + "onclick=selectFridge()/><figcaption>"+ fridgeName + "</figcaption></figure>";
    // tr.innerHTML = "<img src='/public/images/fridgeIcon.png' name='fridgeImage' height=40 width=30 id=" + fridgeName + " onclick=selectFridge()/> "+ fridgeName;
    console.log("hi");
    table.appendChild(tr);
}

function addIngredientCheckBox(ingredientName, input){
  console.log(ingredientName)
    let ele = document.getElementById(input + '-ingredients');
    console.log(document.getElementById(input + '-ingredients').value);
        var text = ele.appendChild(document.createElement('h3'));
        text.innerHTML = ingredientName;
        // let ele = document.getElementById('ingredient-checkboxes');
        // let node = document.createTextNode(ingredientName);
        console.log("hello");
        ele.appendChild(text);
        ingredients.push(ingredientName);
        if (input == 'fruit' && !(fruit.includes(ingredientName))) {
          fruit.push(ingredientName)
        }
        if (input == 'vegetable' && !(vegetable.includes(ingredientName))) {
          vegetable.push(ingredientName)
        }
        if (input == 'grain' && !(grain.includes(ingredientName))) {
          grain.push(ingredientName)
        }
        if (input == 'meat' && !(meat.includes(ingredientName))) {
          meat.push(ingredientName)
        }
        if (input == 'fish' && !(fish.includes(ingredientName))) {
          fish.push(ingredientName)
        }
        if (input == 'dairy' && !(dairy.includes(ingredientName))) {
          dairy.push(ingredientName)
        }
        return ingredients;
        // var hasVal = Object.values(ingredients).includes(ingredientName);
        // if (!(hasVal)) {
        //   let temp = ingredients[ingredientName] = input
        //   fridgeTest.push(temp)
        // }

}

// function addImage(fridgeName){
//     var table = document.getElementById("fridge-table")
//     var emptyRow = document.getElementById("fridgeIcons");
//     var fridgeColumn = document.getElementById("col1");
//     if(emptyRow){
//         emptyRow.parentNode.removeChild(emptyRow);
//     }
//     var td = fridgeColumn.appendChild(document.createElement('tr'));
//     td.innerHTML = "<figure><img src='assets/fridgeIcon.png' name='fridgeImage' id=" + fridgeName + "onclick=selectFridge()/><figcaption>"+ fridgeName + "</figcaption></figure>";
//     console.log("made it!")
//     table.appendChild(td);
// }

function addRowHandler() {
    var table = document.getElementById("fridge-table");
    var rows = table.getElementsByTagName("tr");
    console.log("1")
    for (i = 0; i < rows.length; i++) {
      var currentRow = table.rows[i];
      var createClickHandler = function(row) {
        return function() {
          var cell = row.getElementsByTagName("td")[0];
          var id = cell.innerHTML;
          let ingredients = document.querySelector(".current-ingredients");
          ingredients.style.display = "block";
        //   document.getElementById("current-ingredients").style = "display:none";
        //   alert("id:" + id);
        };
      };
      currentRow.onclick = createClickHandler(currentRow);
    }
  }

function createNewFridge() {
    let closeBtn = document.querySelector(".close-btn")
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
    closeBtn.onclick = function(){
        modal.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modal){
          modal.style.display = "none"
        }
    }
}

function validateNewFridge() {
    let fridgeName = document.getElementById("fridge-name-input").value.length;
    console.log(fridgeName);
    if (fridgeName > 0 ) {
        let modal = document.querySelector(".modal");
        console.log(fridgeName);
        modal.style.display = "none";
        let name = document.getElementById("fridge-name-input").value;
        addImage(name);
        // writeFridgeData(document.getElementById("fridge-name-input").value);
        // writeFridgeName();
        // writeFridgeData()
        writeFridgeData()
        document.getElementById('new-fridge-form').reset();
        return false;
    }
}

function validateNewIngredient(input) {
    let ingredientName = document.getElementById(input + '-input').value;
    console.log(ingredientName);
    if (ingredientName.length > 0) {
        // let modal = document.querySelector(".modal");
        // modal.style.display = "none";
        // let document.getElementById("ingredient-checkboxes")
        addIngredientCheckBox(ingredientName, input);
    }
}

window.onload = function() {
    document.getElementById('new-fridge-form').addEventListener('submit', function(event) {
      event.preventDefault();
      return validateNewFridge();
    });
}

// window.onload = function() {
//     document.getElementById('new-fridge-form').addEventListener('submit', function(event) {
//       validateNewFridge();
//       return false
//     });
// }

// $(document).on('submit', 'form.remember', function(){
//   validateNewFridge();
// })

$(document).on('click', '#fruit-button', function (event)
{
    event.preventDefault();
    var $modal = $('#fridge-modal');
    $modal.find('#fruit-button').prop('clicked', true);
});

$(document).on('click', '#vegetable-button', function (event)
{
    event.preventDefault();
    var $modal = $('#fridge-modal');
    $modal.find('#vegetable-button').prop('clicked', true);
});
$(document).on('click', '#grain-button', function (event)
{
    event.preventDefault();
    var $modal = $('#fridge-modal');
    $modal.find('#grain-button').prop('clicked', true);
});
$(document).on('click', '#meat-button', function (event)
{
    event.preventDefault();
    var $modal = $('#fridge-modal');
    $modal.find('#meat-button').prop('clicked', true);
});
$(document).on('click', '#fish-button', function (event)
{
    event.preventDefault();
    var $modal = $('#fridge-modal');
    $modal.find('#fish-button').prop('clicked', true);
});

$(document).on('click', '#dairy-button', function (event)
{
    event.preventDefault();
    var $modal = $('#fridge-modal');
    $modal.find('#dairy-button').prop('clicked', true);
});


// function writeFridgeName(fridgeName) {
//     var currentFridges = firebase.database().ref('/myfridges');
//     // const app = firebase.initializeApp(firebaseConfig);
//     // const db = firebase.getDatabase(app);
//     currentFridges.set(ref(db, 'users/' + userId), {
//         FridgeName: fridgeName,
//     });
//   }


// function writeFridgeData() {
//     var fridgeName = document.getElementById("fridge-name-input").value;
//     var fridge = [];
//     fridge.push(localStorage(""))
//     fridge.push(fridgeName)
//     for (var option of document.getElementById("collaborators").options) {
//       if (option.selected) {
//         collaborators.push(option.value)
//       }
//       fridge.push(collaborators)
//     }
//     fridge.push(fruit)
//     fridge.push(vegetable)
//     fridge.push(grain)
//     fridge.push(meat)
//     fridge.push(fish)
//     fridge.push(dairy)
//     // for (let i = 0; i < ingredients.length; i++) {
//     //   fridge.push(ingredients[i])  
//     //   i++;
//     // }
//     $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/fridges',
//         data: JSON.stringify(fridge),
//         contentType: "application/json",
        
//         success: function (res) {
//             console.log("post success");
//         },
//         error: function (xhr, status, err) {
//             console.log(xhr.responseText);
//         }
//     });
// }

function writeFridgeData() {
  var fridgeName = document.getElementById("fridge-name-input").value;  
  var fridge = [];
  console.log(localStorage.getItem("uid"));
  fridge.push(localStorage.getItem("uid"));
  fridge.push(fridgeName);
  for (var option of document.getElementById("collaborators").options) {
    if (option.selected) {
      collaborators.push(option.value)
    }
  }
  fridge.push(collaborators)
  fridge.push(fruit)
  fridge.push(vegetable)
  fridge.push(grain)
  fridge.push(meat)
  fridge.push(fish)
  fridge.push(dairy)
  console.log(fridge)
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/fridges',
        data: JSON.stringify(fridge),
        contentType: "application/json",
        
        success: function (res) {
            console.log("post success");
        },
        error: function (xhr, status, err) {
            console.log(xhr.responseText);
        }
    });
}
    // else {
    //   fridge.push(null)
    // }

  // for (let i = 0; i < ingredients.length; i++) {
  //   fridge.push(ingredients[i])  
  //   i++;
  // }
  // for (let i = 0; i < ingredients.length; i++) {
  //   fridge.push(ingredients[i])  
  //   i++;
  // }
  // for (let i = 0; i < ingredients.length; i++) {
  //   fridge.push(ingredients[i])  
  //   i++;
  // }
  // for (let i = 0; i < ingredients.length; i++) {
  //   fridge.push(ingredients[i])  
  //   i++;
  // }
  // for (let i = 0; i < ingredients.length; i++) {
  //   fridge.push(ingredients[i])  
  //   i++;
  // }
  // for (let i = 0; i < ingredients.length; i++) {
  //   fridge.push(ingredients[i])  
  //   i++;
  // }
  // for (let i = 0; i < ingredients.length; i++) {
  //   fridge.push(ingredients[i])  
  //   i++;
  // }
  // for (var ingredient in ingredients) {
  //   fridge.push(ingredient)
  // }
  // for (var fruitItem in fruit) {
  //   fridge.push(fruitItem)
  // }
  // for (var vegetableItem in vegetable) {
  //   fridge.push(vegetableItem)
  // }
  // for (var grainItem in grain) {
  //   fridge.push(grainItem)
  // }
  // for (var meatItem in meat) {
  //   fridge.push(meatItem)
  // }
  // for (var fishItem in fish) {
  //   fridge.push(fishItem)
  // }
  // for (var dairyItem in dairy) {
  //   fridge.push(dairyItem)
  // }
  // for (var prop in fridgeIngredients) {
  //   fridge.push(prop);
  // }
  // fridge.push(Object.entries(ingredients));
  // // for (var ingredient of fridgeIngredients) {
  // //         fridge.push(ingredient);
  // // }

// function openFoodCategory(event, categoryName) {
//     console.log(event);
//     console.log(categoryName)

// }

// function openFoodGroup(id) {
//     console.log(id)
//     var x = document.getElementById(id);
//     console.log(x)
//     if (x.className.indexOf("w3-show") == -1) {
//       x.className += " w3-show";
//     } else {
//       x.className = x.className.replace(" w3-show", "");
//     }
//   }

//   function openFoodGroup(id) {
//     var acc = document.getElementById(id)
//     var i;

//     for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//         } else {
//         panel.style.maxHeight = panel.scrollHeight + "px";
//         }
//     });
//     }
//   }

    // var acc = document.getElementsByClassName("accordion");
    // var i;
    
    // for (i = 0; i < acc.length; i++) {
    //   acc[i].addEventListener("click", function() {
    //     /* Toggle between adding and removing the "active" class,
    //     to highlight the button that controls the panel */
    //     this.classList.toggle("active");
    
    //     /* Toggle between hiding and showing the active panel */
    //     var panel = this.nextElementSibling;
    //     if (panel.style.display === "block") {
    //       panel.style.display = "none";
    //     } else {
    //       panel.style.display = "block";
    //     }
    //   });
    // }
  

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}