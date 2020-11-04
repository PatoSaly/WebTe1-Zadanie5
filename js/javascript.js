var mymap = L.map('mapid').setView([48.151965, 17.072995], 17);

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

// var myStyle = {
//     fillColor: "#a83232",
//     fillOpacity: 0.8
// };

// L.geoJSON(bloky, {
//     style: myStyle
// }).addTo(mymap);

// function onEachFeature(feature, layer) {

//     // does this feature have a property named popupContent?
//     if (feature.properties && feature.properties.popupContent) {
//         layer.bindPopup(feature.properties.popupContent);
//     }
// }

// L.geoJSON(bloky, {
//     onEachFeature: onEachFeature
// }, {style: myStyle}).addTo(mymap);
