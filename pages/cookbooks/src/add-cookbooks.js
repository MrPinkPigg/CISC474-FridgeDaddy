function addCookbook() {
    document.getElementById('add-cookbook-form').addEventListener('submit', function (event) {
        const newA = document.createElement("a");
        const newHref = document.createHref("cookbooks.html");
        const cookbookName = document.getElementById('cookbook_name');
        newA.appendChild(newHref, cookbookName);
        const currentDiv = document.getElementById("header-right");
        document.body.append(newA, currentDiv);
    });
}