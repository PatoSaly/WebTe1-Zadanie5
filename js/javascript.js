var mymap = L.map('mapid').setView([48.152525, 17.073150], 17);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoieHNhbHlwIiwiYSI6ImNrZ3hzZ2djeDBtdWcyc29mejR3Z3d4am8ifQ.y3ufv0Bqs6-JuPHHOumQQg'
}).addTo(mymap);

var geojson =  [{
    "type": "Feature",
    "properties": {
        "blok": "A",
        "popupContent":"<b>Blok A</b><br>Pedagogické oddelenie (PGO), Inštitút komunikácie a aplikovanej lingvistiky (IKAL), Ústav jadrového a fyzikálneho inžinierstva (ÚJFI)"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072555, 48.151828],
            [17.072555, 48.151960],
            [17.073882, 48.151960],
            [17.073882, 48.151828]
        ]]
    },
}, {
    "type": "Feature",
    "properties": {
        "blok": "B",
        "popupContent":"<b>Blok B</b><br>Ústav elektrotechniky (ÚE), Ústav multimediálnych informačných a komunikačných technológií (ÚMIKT)"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.073000, 48.152462],
            [17.074356, 48.152461],
            [17.074361, 48.152323],
            [17.073000, 48.152338]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "blok": "C",
        "popupContent":"<b>Blok C</b><br>Ústav elektroenergetiky a aplikovanej elektrotechniky (ÚEAE), Ústav informatiky a matematiky (ÚIM)"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072567, 48.152969],
            [17.073887, 48.152969],
            [17.073887, 48.152826],
            [17.072567, 48.152826]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "blok": "D",
        "popupContent":"<b>Blok D</b><br>Ústav automobilovej mechatroniky (ÚAMT), Ústav robotiky a kybernetiky (ÚRK)"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.073200, 48.153473],
            [17.074382, 48.153473],
            [17.074382, 48.153329],
            [17.073200, 48.153329]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "blok": "E",
        "popupContent":"<b>Blok E</b><br>Ústav elektroniky a fotoniky (ÚEF)"
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072569, 48.153979],
            [17.073908, 48.153979],
            [17.073908, 48.153838],
            [17.072569, 48.153838]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {
        "blok": "telocvicne",
        "popupContent":"<b>Telocvične</b><br>Plaváreň, posilňovňa, veľká a malá telocvična..."
    },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [17.072572, 48.154452],
            [17.072828, 48.154452],
            [17.072828, 48.152970],
            [17.072572, 48.152970]
        ]]
    }
}];


L.geoJSON(geojson, {
    style : function(feature) {
        return{
            color: '#000',
            weight: 0.5,
            fillColor: '#42f590'
        }
    },
    onEachFeature : function(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent);
        }
    }
}).addTo(mymap);


var busIcon = new L.icon({
    iconUrl: 'https://cdn3.iconfinder.com/data/icons/maps-and-pins-4/512/map_pin_destination_location_adress_bus_stop-512.png',
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

var tramIcon = new L.icon({
    iconUrl: 'https://cdn.onlinewebfonts.com/svg/img_465557.png',
    iconSize: [35, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
});

var vehicleMarker = [{
    "type": "Feature",
    "properties": {
        "id" : "bus",
        "popupContent": "<b>Botanická záhrada: </b> 29, 32, N29, N33, N34"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.072034, 48.148310]
    }
}, {
    "type": "Feature",
    "properties": {
        "id" : "bus",
        "popupContent": "<b>Botanická záhrada: </b> 29, 32, N29, N33, N34"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.072305, 48.147926]
    }
}, {
    "type": "Feature",
    "properties": {
        "id" : "bus",
        "popupContent": "<b>Zoo: </b> 31, 39, N31"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.07456, 48.15459]
    }
}, {
    "type": "Feature",
    "properties": {
        "id" : "bus",
        "popupContent": "<b>Zoo: </b> 31, 39, N31"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.07512, 48.15412]
    }
}, {
    "type": "Feature",
    "properties": {
        "id" : "bus",
        "popupContent": "<b>Zoo: </b> 30, 32, 37, 92, 192 N29"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.07578, 48.15465]
    }
}, {
    "type": "Feature",
    "properties": {
        "id" : "bus",
        "popupContent": "<b>Zoo: </b> 30, 32, 37, 92, 192 N29"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.07692, 48.15405]
    }
}, {
    "type": "Feature",
    "properties": {
        "id" : "tram",
        "popupContent": "<b>Botanická záhrada: </b> 4, 9"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.07178, 48.14813]
    }
}, {
    "type": "Feature",
    "properties": {
        "id" : "tram",
        "popupContent": "<b>Botanická záhrada: </b> 4, 9"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [17.07247, 48.14813]
    }
}];

L.geoJSON(vehicleMarker, {
    pointToLayer: function(geoJsonPoint, latlng) {
        if(geoJsonPoint.properties.id == "bus") {
            return L.marker(latlng, {
                icon: busIcon
            }); 
        }
        else if(geoJsonPoint.properties.id == "tram") {
            return L.marker(latlng, {
                icon: tramIcon
            }); 
        }
        else {
            console.log("Marker icon no defined for this vehicle!");
        }

    },
    onEachFeature : function(feature, layer) {
        // does this feature have a property named popupContent?
        if (feature.properties && feature.properties.popupContent) {
            layer.bindPopup(feature.properties.popupContent);
        }
    }
}).addTo(mymap);



