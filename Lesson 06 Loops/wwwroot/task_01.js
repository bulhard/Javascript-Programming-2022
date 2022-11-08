let cities = [];

function AddNewCity() {
    let newCity = document.getElementById("newCity").value;

    cities.push(newCity);

    ReloadCities();
}

function ReloadCities() {
    let citiesSelect = document.getElementById("citiesSelect");
    debugger;

    citiesSelect.innerHTML = "";

    for (var i = 0; i < cities.length; i++) {
        var option = document.createElement("option");

        option.value = cities[i];
        option.text = cities[i];

        citiesSelect.appendChild(option);
    }
}