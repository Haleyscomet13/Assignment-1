var map = L.map('map').setView([37.7, -122.4], 10);

// Load a Stamen tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Load GeoJSON from an external file
$.getJSON("https://raw.githubusercontent.com/orhuna/WebGIS_SLU_M1/main/Module%201/Assignment%201/data/sf_crime.geojson", function (data) {
    // Create an icon
    var ratIcon = L.icon({
        iconUrl: 'http://maptimeboston.github.io/leaflet-intro/rat.gif',
        iconSize: [50, 40]
    });

    // Add GeoJSON layer to the map once the file is loaded
    L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
            return L.marker(latlng, { icon: ratIcon });
        }
    }).addTo(map);
});
