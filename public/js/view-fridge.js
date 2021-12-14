if (localStorage.getItem("uid") == null) {
    location.href="signIn"
}
else {
    var arr = [localStorage.getItem("uid")];
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/fridgesList?uid=' + localStorage.getItem("uid"),
        // data: JSON.stringify(arr),
        // contentType: "application/json",
        success: function(res) {
            populateFridges(res);
        },
        error: function(xhr, status, err) {
           console.log(xhr.responseText);
        }
     });
}

function populateFridges(obj) {
    console.log(obj);
    var name = findProp(obj, "FridgeName");
    var fruit = findProp(obj, "FridgeFruit");
    var vegetable = findProp(obj, "FridgeVegetable");
    var grain = findProp(obj, "FridgeGrain");
    var meat = findProp(obj, "FridgeMeat");
    var fish = findProp(obj, "FridgeFish");
    var dairy = findProp(obj, "FridgeDairy");
    createTextNodes('name', name);
    createTextNodes('fruit', fruit);
    createTextNodes('vegetable', vegetable);
    createTextNodes('grain', grain);
    createTextNodes('meat', meat);
    createTextNodes('fish', fish);
    createTextNodes('dairy', dairy);
}

function findProp(obj, key, out) {
    var i,
    proto = Object.prototype,
    ts = proto.toString,
    hasOwn = proto.hasOwnProperty.bind(obj);
    if ('[object Array]' !== ts.call(out)) out = [];
    for (i in obj) {
        if (hasOwn(i)) {
            if (i === key) {
                out.push(obj[i]);
            } else if ('[object Array]' === ts.call(obj[i]) || '[object Object]' === ts.call(obj[i])) {
                findProp(obj[i], key, out);
            }
        }
    }
    return out;
}

function createTextNodes(id, value) {
    var node = document.getElementById(id);
    if (value.length > 0) {
        if (id == 'name') {
            value.forEach(element => {
                var h = document.createElement("H1")
                var item = document.createTextNode(element);
                h.appendChild(item)
                node.appendChild(h);
            }); 
        }
        else {
            value.forEach(element => {
                element.forEach(e => {
                    var h = document.createElement("H5")
                    var item = document.createTextNode(e);
                    h.appendChild(item)
                    node.appendChild(h);
                })
            }); 
        }
    }
}


function addFood() {
        document.getElementById("form-group").style.display = '';
        // closeBtn.onclick = function(){
        //     modal.style.display = "none"
        // }
        // window.onclick = function(e){
        //     if(e.target == modal){
        //       modal.style.display = "none"
        //     }
        // }
    }

// function deleteCookbook(id) {
//     $.ajax({
//         type: 'DELETE',
//         url: 'http://localhost:3000/cookbookDelete?uid=' + localStorage.getItem("uid") + "&ingredientName=" + id,
//         success: function(res) {
//             console.log("delete success");
//         },
//         error: function(xhr, status, err) {
//            console.log(xhr.responseText);
//         }
//      });
//     location.reload();
// }