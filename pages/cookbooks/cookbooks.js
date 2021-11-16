function populateCookbooks() {
    firebase.database().ref("mycookbooks/").on('value', function (snap) {

        var parent = document.getElementById("cookbooks-container");

        snap.forEach(function (childNodes) {
            var div = document.createElement("div");
            var cookbookName = childNodes.key;
            var cookbookDesc = childNodes.val().CookbookDesc;

            var cookbookDiv = '<div class="col-md-4">' + '<div class="card mb-4 box-shadow">' + '<img class="card-img-top" src="../../images/cookbook.jpeg" alt="Image of a cookbook">' + '<div class="card-body">' + '<h5 class="card-title">' + cookbookName + '</h5>' + '<p class="card-text">' + cookbookDesc + '<div class="d-flex justify-content-between align-items-center">' + '<div class="btn-group">' + '<button type="button" class="btn btn-sm btn-outline-secondary">View' + '</button>' + '<button type="button" class="btn btn-sm btn-outline-secondary">Delete' + '</button>' + '</div>' + '<small class="text-muted">0 recipes</small>' + '</div>' + '</div>' + '</div>' + '</div>'

            div.innerHTML = cookbookDiv;
            parent.appendChild(div);
        });
    });
}