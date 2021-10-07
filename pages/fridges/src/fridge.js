function addFridge() {
    var fridge = document.createElement("fridge");
    fridge.src = "~/assets/fridgeIcon.png";
    var className = "fridges";
    fridge.setAttribute("class", className);
    document.getElementById("fridgeIcons").appendChild(fridge);
    console.log("fridge added");
};

function selectFridge() {
    console.log("fridge selected");
}

function addImage(fridgeName){
    var table = document.getElementById("fridge-table")
    var emptyRow = document.getElementById("fridgeIcons");
    var fridgeColumn = document.getElementById("col1");
    if(emptyRow){
        emptyRow.parentNode.removeChild(emptyRow);
    }
    var tr = fridgeColumn.appendChild(document.createElement('tr'));
    tr.innerHTML = "<h3>" + fridgeName + "</h3>";
    // tr.innerHTML = "<figure><img src='assets/fridgeIcon.png' name='fridgeImage' id=" + fridgeName + "onclick=selectFridge()/><figcaption>"+ fridgeName + "</figcaption></figure>";
    // tr.innerHTML = "<img src='assets/fridgeIcon.png' name='fridgeImage' height=40 width=30 id=" + fridgeName + " onclick=selectFridge()/> "+ fridgeName;
    console.log("made it!")
    addRowHandler();
    table.appendChild(tr);
}

function addIngredientCheckBox(ingredientName){
    let ele = document.getElementById('ingredient-checkboxes');
        var text = ele.appendChild(document.createElement('h3'));
        text.innerHTML = ingredientName;
        // let ele = document.getElementById('ingredient-checkboxes');
        // let node = document.createTextNode(ingredientName);
        console.log("hello");
        ele.appendChild(text);
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
    if (fridgeName > 0) {
        let modal = document.querySelector(".modal");
        console.log(fridgeName);
        modal.style.display = "none";
        addImage(document.getElementById("fridge-name-input").value);
    }
}

function validateNewIngredient() {
    let ingredientName = document.getElementById("ingredient-input").value;
    console.log(ingredientName);
    if (ingredientName.length > 0) {
        // let modal = document.querySelector(".modal");
        // modal.style.display = "none";
        // let document.getElementById("ingredient-checkboxes")
        addIngredientCheckBox(document.getElementById("ingredient-input").value);
    }
}

window.onload = function() {
    document.getElementById('new-fridge-form').addEventListener('submit', function(event) {
        event.preventDefault();
        return validateNewFridge();
    });
    document.getElementById('ingredient-form').addEventListener('submit', function(event) {
        event.preventDefault();
        return validateNewIngredient();
    });
}

// window.onload = function() {
//     document.getElementById('ingredient-form').addEventListener('submit', function(event) {
//         event.preventDefault();
//         return newIngredient();
//     });
// }