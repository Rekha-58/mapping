const lat =13.14; 
const lon = 79.89;
let mapoptions = {
    center:[lat,lon],
    keyboard: true,
    zoom:13
}
var map = L.map('map' , mapoptions);
let layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png');
layer.addTo(map);

let markeroptions = {
    title :"This is my location",
    clickable : true,
    draggable : true
}
let marker = L.marker([lat,lon], markeroptions);

marker.bindPopup('hi there').openPopup();

marker.on('drag', function (e) {
    console.log('marker drag event');
    console.log(marker.getLatLng());
    console.log(marker.getIcon());
});

marker.on('click', L.DomEvent.stopPropagation);
marker.addTo(map);

let circle = L.circle([lat, lon], {
    color: 'red',
    fillcolor: '#f03',
    fillopacity: 0.5,
    radius: 200});
circle.bindPopup('I am circle').openPopup();
circle.addTo(map);

let polyoptions = {
    strokeColor:"#0000FF",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"red",
    fillOpacity:0.4
}
var polygon =  L.polygon([
    [13.25,79.92],
    [13.9,78.92],
    [13.50,82.72]
],polyoptions);
polygon.bindPopup('I am polygon').openPopup();
polygon.addTo(map);

let scales = L.control.scale({
   position: 'topright'
})
scales.addTo(map);
