document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.querySelector(".dropdown-button");
    var dropdownContent = document.querySelector(".dropdown-content");

    dropdownButton.addEventListener("click", function() {
        dropdownContent.classList.toggle("show");
    });

    dropdownContent.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.target.remove();
        }
    });
});
