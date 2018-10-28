document.getElementById("createEvent_button").onclick = function() {
  var x = document.getElementById("createEvent");
  var y = document.getElementById("viewEvent");
  var z = document.getElementById("setup");

  y.style.display = "none";
  z.style.display = "none";
  x.style.display = "block";

};


document.getElementById("viewEvent_button").onclick = function() {
  var x = document.getElementById("createEvent");
  var y = document.getElementById("viewEvent");
  var z = document.getElementById("setup");

  x.style.display = "none";
  z.style.display = "none";
  y.style.display = "block";

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
