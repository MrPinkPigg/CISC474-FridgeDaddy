let ing_list = [];

$.ajax({
   type: 'GET',
   url: 'http://localhost:3000/tags',
   success: function(res) {
      console.log( res );
      for(var i = 0; i < res.length; i++) {
         document.getElementById('inputGroupSelect').innerHTML += '<option value="' + res[i] + '">' + res[i] + '</option>';
      }
   },
   error: function(xhr, status, err) {
      console.log(xhr.responseText);
   }
});

window.onload = function() {
   document.getElementById("go").onclick = function() {
       localStorage.setItem("ing_list", JSON.stringify(ing_list));
   }
}


document.addEventListener('input', function (event) {
	if (event.target.id !== 'inputGroupSelect') return;
   if(!ing_list.includes(event.target.options[event.target.selectedIndex].text) && event.target.options[event.target.selectedIndex].text != "Choose...") {
      ing_list.push(event.target.options[event.target.selectedIndex].text);
      updateList();
   }
}, false);


function updateList() {
   document.getElementById('table-body').innerHTML = "";
   for(var i = 0; i < ing_list.length; i++) {
      document.getElementById('table-body').innerHTML += "<tr><td id='data-row'>" + ing_list[i] + "</td><td class='d-flex justify-content-end'><button type='button' class='btn btn-outline-danger' id='delete-button'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash' viewBox='0 0 16 16'>" 
         + "<path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z'></path><path fill-rule='evenodd' d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'>" 
         + "</path></svg></button></td></tr>";
   }
   deletes();
}

function deletes() {
   document.querySelectorAll('#delete-button').forEach(item => {
      item.addEventListener('click', event => {
        ing_list.splice(ing_list.indexOf(item.closest("tr").firstChild.textContent), 1);
        updateList();
      })
    })
}

