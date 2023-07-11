function updateWindowSize() {
    var width = window.innerWidth;
    var height = window.innerHeight;

    var sizeInfo = document.getElementById("sizeValue");
    sizeInfo.textContent = "Width: " + width + ", Height: " + height;
}


updateWindowSize();

window.addEventListener("resize", function() {
    updateWindowSize();
});
