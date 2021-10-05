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
    var td = fridgeColumn.appendChild(document.createElement('td'));
    td.innerHTML = "<figure><img src='assets/fridgeIcon.png' onclick=selectFridge()/><figcaption>"+ fridgeName + "</figcaption></figure>";
    console.log("made it!")
    table.appendChild(td);
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

window.onload = function() {
    document.getElementById('new-fridge-form').addEventListener('submit', function(event) {
        event.preventDefault();
        return validateNewFridge();
    });
}