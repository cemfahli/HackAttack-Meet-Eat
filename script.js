document.getElementById("createEvent_button").onClick = function() {
    console.log("Here!");
    var x = document.getElementsByClassName("createEvent");
    var y = document.getElementsByClassName("viewEvent");
    var z = document.getElementsByClassName("setup");

    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";

};


document.getElementById("viewEvent_button").onClick = function() {
    var x = document.getElementsByClassName("createEvent");
    var y = document.getElementsByClassName("viewEvent");
    var z = document.getElementsByClassName("setup");

    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "none";

};

document.getElementById("setup_button").onClick = function() {
    var x = document.getElementsByClassName("createEvent");
    var y = document.getElementsByClassName("viewEvent");
    var z = document.getElementsByClassName("setup");

    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "block";

};




