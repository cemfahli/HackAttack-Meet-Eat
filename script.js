
//main page code
document.getElementById("createEvent_button").onclick = function() {
    var x = document.getElementById("createEvent");
    var y = document.getElementById("viewEvent");
    var z = document.getElementById("setup");

    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

};


document.getElementById("viewEvent_button").onclick = function() {
    var x = document.getElementById("createEvent");
    var y = document.getElementById("viewEvent");
    var z = document.getElementById("setup");

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";

};

document.getElementById("setup_button").onclick = function() {
    console.log("here!");
    var x = document.getElementById("createEvent");
    var y = document.getElementById("viewEvent");
    var z = document.getElementById("setup");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

};

//setup code
var interests = []
function addItem(){
    var li = document.createElement("li");  
    var input = document.getElementById("userInput");
    li.innerHTML = input.value;
    if (input.value === "") {
        alert("Please enter an item!")
    }
    document.getElementById("myUL").appendChild(li);
    interests.push(input.value)
    document.getElementById("userInput").value = "";
}


function storeEvent() {
  var input = document.getElementById("eventin").elements;
  window.localStorage.event = input;
}

document.getElementById("userInput").onkeydown = function(event) {
        if (event.keyCode == 13) {
        addItem();
    }
}
