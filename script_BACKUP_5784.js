<<<<<<< HEAD
document.getElementById("createEvent_button").onclick = function() {
  var x = document.getElementById("createEvent");
  var y = document.getElementById("viewEvent");
  var z = document.getElementById("setup");
=======

document.getElementById("createEvent_button").onclick = function() {
    var x = document.getElementById("createEvent");
    var y = document.getElementById("viewEvent");
    var z = document.getElementById("setup");
>>>>>>> 18918cb0e58e1c673187b8e7d86bce250d096abb

  y.style.display = "none";
  z.style.display = "none";
  x.style.display = "block";

};


document.getElementById("viewEvent_button").onclick = function() {
<<<<<<< HEAD
  var x = document.getElementById("createEvent");
  var y = document.getElementById("viewEvent");
  var z = document.getElementById("setup");

  x.style.display = "none";
  z.style.display = "none";
  y.style.display = "block";
=======
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
>>>>>>> 18918cb0e58e1c673187b8e7d86bce250d096abb

};

document.getElementById("setup_button").onclick = function() {
  var x = document.getElementById("createEvent");
  var y = document.getElementById("viewEvent");
  var z = document.getElementById("setup");

  x.style.display = "none";
  y.style.display = "none";
  z.style.display = "block";
};

function storeEvent() {
  var input = document.getElementById("eventin").elements;
  window.localStorage.event = input;
}
