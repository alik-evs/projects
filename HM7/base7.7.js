var countryDropdown = document.getElementById("country");
var cityDropdown = document.getElementById("cities");
var selectedText = document.getElementById("selected");

var cityOptions = {
    ger: ["Berlin", "Hamburg", "Munich"],
    usa: ["New York", "Los Angeles", "Chicago"],
    ukr: ["Kyiv", "Lviv", "Odesa"]
};

function populateCities() {
    var selectedCountry = countryDropdown.value;
    var cities = cityOptions[selectedCountry];


    cityDropdown.innerHTML = "";

    cities.forEach(function(city) {
        var option = document.createElement("option");
        option.value = city;
        option.textContent = city;
        cityDropdown.appendChild(option);
    });
}

countryDropdown.addEventListener("change", function() {
    populateCities();
    selectedText.textContent = "Selected Country: " + countryDropdown.options[countryDropdown.selectedIndex].text;
});

cityDropdown.addEventListener("change", function() {
    selectedText.textContent = "Selected City: " + cityDropdown.options[cityDropdown.selectedIndex].text;
});

populateCities();
