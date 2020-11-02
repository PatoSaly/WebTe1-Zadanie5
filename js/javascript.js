var mymap = L.map('mapid').setView([48.151965, 17.072995], 16);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieHNhbHlwIiwiYSI6ImNrZ3hzZ2djeDBtdWcyc29mejR3Z3d4am8ifQ.y3ufv0Bqs6-JuPHHOumQQg'
}).addTo(mymap);

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.072995,  48.151965]
    }
};

L.geoJSON(geojsonFeature).addTo(mymap);


