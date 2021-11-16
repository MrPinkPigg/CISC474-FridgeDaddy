// const db = getDatabase(app);

// function addCookbook() {
//     var cookbookName = document.getElementById("cookbook_name");
//     var cookbookDesc = document.getElementById("cookbook_desc");

//     set(ref(db, "MyCookbooks/" + cookbookName), {
//         CookbookDesc : cookbookDesc
//     })
//     .then(()=>{
//         alert("Cookbook successfully added");
//     })
//     .catch((error)=>{
//         alert("Cookbook failed to add")
//     });

// }

function addCookbook() {
    var db = firebase.database();
    var cookbookName = document.getElementById("cookbook_name").value;
    var cookbookDesc = document.getElementById("cookbook_desc").value;
    db.ref("mycookbooks/" + cookbookName).set({
        CookbookDesc : cookbookDesc
    });
    console.log("test");
}