"use strict";

var map;

const LITHUANIA = {
  north: 60,
  south: 50,
  west: 10,
  east: 40
};

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 54.6872,
      lng: 25.2797
    },
    disableDefaultUI: true,
    restriction: {
      latLngBounds: LITHUANIA,
      strictBounds: false
    },
    zoom: 9, 
    styles: 
    [{elementType:'geometry',stylers:[{color:'#f5f5f5'}]},{elementType:'labels.icon',stylers:[{visibility:'off'}]},{elementType:'labels.text.fill',stylers:[{color:'#616161'}]},{elementType:'labels.text.stroke',stylers:[{color:'#f5f5f5'}]},{featureType:'administrative.land_parcel',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'administrative.land_parcel',elementType:'labels.text.fill',stylers:[{color:'#bdbdbd'}]},{featureType:'administrative.locality',elementType:'labels.text.fill',stylers:[{color:'#a3a3a3'}]},{featureType:'administrative.neighborhood',elementType:'labels.text.fill',stylers:[{color:'#c2c2c2'}]},{featureType:'administrative.province',elementType:'labels.text.fill',stylers:[{color:'#c2c2c2'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'poi',elementType:'labels.text',stylers:[{visibility:'off'}]},{featureType:'poi',elementType:'labels.text.fill',stylers:[{color:'#757575'}]},{featureType:'poi.park',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'poi.park',elementType:'geometry.fill',stylers:[{color:'#e1e5e2'}]},{featureType:'poi.park',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'road',elementType:'geometry',stylers:[{color:'#ffffff'}]},{featureType:'road.arterial',elementType:'labels.text.fill',stylers:[{color:'#c2c2c2'},{weight:1}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#dadada'}]},{featureType:'road.highway',elementType:'labels.text.fill',stylers:[{color:'#b8b8b8'}]},{featureType:'road.local',elementType:'labels',stylers:[{visibility:'off'}]},{featureType:'road.local',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]},{featureType:'transit.line',elementType:'geometry',stylers:[{color:'#e5e5e5'}]},{featureType:'transit.station',elementType:'geometry',stylers:[{color:'#eeeeee'}]},{featureType:'water',elementType:'geometry',stylers:[{color:'#c9c9c9'}]},{featureType:'water',elementType:'geometry.fill',stylers:[{color:'#d8dadf'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#9e9e9e'}]}]
  });
  
  var kmlLayer = new google.maps.KmlLayer({ 
  url: `https://www.google.com/maps/d/u/0/kml?mid=1zNF4GIxw_IvmPIibcORfI-KS1U9c6kI7&key=${Math.random()}`,
  suppressInfoWindows: false,
  preserveViewport: false,
  map: map
  });

  kmlLayer.addListener('click', function (event) {
    var testimonial = document.getElementById('capture');
    testimonial.innerHTML = "";
  
    var div_name = document.createElement("div");
    div_name.id = "div_name";
    div_name.innerText = event.featureData.name;

    var splittedData = event.featureData.description.split('>');

    var div_image = document.createElement("div");
    div_image.id = "div_image";
    div_image.innerHTML = splittedData[0] + ">";

    var div_description = document.createElement("div");
    div_description.id = "div_description";
    for (var i = 3; i < splittedData.length; i++) {
        div_description.innerHTML += splittedData[i];
    }
    testimonial.appendChild(div_name);
    testimonial.appendChild(div_image);
    testimonial.appendChild(div_description);
  });
  
}