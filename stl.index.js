var map = L.map('map').setView([38.6270, -90.1994], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker1 = L.marker([38.61637, -90.25036]).addTo(map);
var marker2 = L.marker([38.61495, -90.27517]).addTo(map);
var marker3 = L.marker([38.62274, -90.19280]).addTo(map);
var marker4 = L.marker([38.61315, -90.25941]).addTo(map);
var marker5 = L.marker([38.64045, -90.29373]).addTo(map);

marker1.bindPopup("<b>Restaurant 1</b><br>Sasha's on Shaw").openPopup();
marker2.bindPopup("<b>Restaurant 2</b><br>Mama's on the Hill").openPopup();
marker3.bindPopup("<b>Place 3</b><br>Busch Stadium").openPopup();
marker4.bindPopup("<b>Place 4</b><br>Missouri Botanical Garden").openPopup();
marker5.bindPopup("<b>Place 5</b><br>Art Hill").openPopup();
