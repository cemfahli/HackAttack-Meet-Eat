
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
    var x = document.getElementById("createEvent");
    var y = document.getElementById("viewEvent");
    var z = document.getElementById("setup");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

};




