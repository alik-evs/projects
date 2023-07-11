document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn");

    btn.addEventListener("click", function() {
        alert("I was pressed!");
    });

    btn.addEventListener("mouseenter", function() {
        alert("Mouse on me!");
    });

    btn.addEventListener("mouseleave", function() {
        alert("Mouse is not on me!");
    });
});
