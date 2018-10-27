$(document).ready(function() {

    $('#createEvent_button').click(function() {
        var x = document.getElementsByClassName("createEvent");
        var y = document.getElementsByClassName("viewEvent");
        var z = document.getElementsByClassName("setup");

        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";

    });

    $('#viewEvent_button').click(function() {
        var x = document.getElementsByClassName("createEvent");
        var y = document.getElementsByClassName("viewEvent");
        var z = document.getElementsByClassName("setup");

        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";

    });

    $('#setup_button').click(function() {
        var x = document.getElementsByClassName("createEvent");
        var y = document.getElementsByClassName("viewEvent");
        var z = document.getElementsByClassName("setup");

        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";

    });




})