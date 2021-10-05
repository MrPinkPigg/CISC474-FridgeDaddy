
document.getElementById("index-button").onclick = function() {
   localStorage.setItem("search", JSON.stringify(document.getElementById("search-bar").value));
}

