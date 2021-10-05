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

function addImage(){
    console.log("hello");
    var table = document.getElementById("fridge-table")
    var emptyRow = document.getElementById("fridgeIcons");
    var fridgeColumn = document.getElementById("col1");
    // .innerHTML="<img src='assets/fridgeIcon.png'>";
    if(emptyRow){
        emptyRow.parentNode.removeChild(emptyRow);
    }
    // var newBowler = document.getElementsByName('bowlersName')[0].value;
    // var tr = document.createElement('tr');
    var td = fridgeColumn.appendChild(document.createElement('td'));
    td.innerHTML = "<img src='assets/fridgeIcon.png' onclick=selectFridge()>";
    table.appendChild(td);
}

function createNewFridge() {
    console.log("modal pop up")
    let modal = document.querySelector(".modal");
    modal.style.display = "block";
    // let fridgeBtn = document.getElementById('newFridgeBtn');
    // let modal = document.querySelector(".modal")
    // let closeBtn = document.querySelector(".close-btn")
    // fridgeBtn.onclick = function(){
    //     modal.style.display = "block"
    // }
    closeBtn.onclick = function(){
        modal.style.display = "none"
    }
    window.onclick = function(e){
        if(e.target == modal){
          modal.style.display = "none"
        }
    }
}

// function createNewFridge() {
//     console.log("hello");
//     $('#fridgeModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('whatever') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     // modal.find('.modal-title').text('New message to ' + recipient)
//     modal.find('.modal-body input').val(recipient)
//     })};

//     let modalBtn = document.getElementById("modal-btn")
//     let modal = document.querySelector(".modal")
//     let closeBtn = document.querySelector(".close-btn")
//         modalBtn.onclick = function(){
//         modal.style.display = "block"
//     }
// closeBtn.onclick = function(){
//   modal.style.display = "none"
// }
// window.onclick = function(e){
//   if(e.target == modal){
//     modal.style.display = "none"
//   }
// }