let mapId = "mapid";
let poiGeoJSONPath = "poi/sample_POI.geojson";
let history = "Abitare nella storia";
let biodeversiy = "Biodiversità";
let difesa = "Difesa del territorio";
let genio = "Genio Umano";
let cielo = "Strati di terra e di cielo";

let mappaComplessiva = true;
let temaAttivo = history;

let icon;

/* Adds Open Street Map And Street, Satellite, Dark*/
var attrib = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var attrib = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
token = 'pk.eyJ1IjoidGVvanV2ZTkzIiwiYSI6ImNqaDh4d3ZwaTA4YTMzNW82Y2RmdXB1eGMifQ.IXhtJ-tsQl86u2Lhlnzn_w'

var light = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: attrib,
    maxZoom: 18,
    id: 'mapbox/light-v10',
    accessToken: token
});

mbAttr = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
mbUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

var satellite = L.tileLayer(mbUrl, {
    id: 'mapbox.streets',
    attribution: mbAttr,
    maxZoom: 18,
});

var markers = {};

/* Filter data for Abitare nella storia */
function func_storia(feature) {
    if(mappaComplessiva) {
        if (feature.properties.Tema === history && feature.properties.filtro === 1) return true
    }
    else{
        if (feature.properties.Tema === history) return true
    }
}

var poistoria = L.geoJSON(poi, {
    filter: func_storia,
    pointToLayer: function (feature, latlng) {
        var historyMarker = new L.CircleMarker(latlng, {
            radius: 6,
            color: "gold",
        });
        if(!Object.keys(markers).includes(history)) markers[history] = historyMarker;
        return historyMarker
    }
});

poistoria.on("click", function(pointObject){
    let feature = pointObject.layer.feature;
    populatePopupLeftBar(feature);
});


/* Filter data for Difesa del territorio */
function func_difesa(feature) {
    if(mappaComplessiva) {
        if (feature.properties.Tema === difesa && feature.properties.filtro === 1) return true
    }
    else{
        if (feature.properties.Tema === difesa) return true
    }
}

var poidifesa = L.geoJSON(poi, {
    filter: func_difesa,
    pointToLayer: function (feature, latlng) {
        var difesaMarker = new L.CircleMarker(latlng, {
            radius: 6,
        });
        if(!Object.keys(markers).includes(difesa)) markers[difesa] = difesaMarker;
        return difesaMarker
    }
});

poidifesa.on("click", function(pointObject){
    let feature = pointObject.layer.feature;
    populatePopupLeftBar(feature);
});


/* Filter data for Strati di terra e di cielo */
function func_religiosa(feature) {
    if(mappaComplessiva) {
        if (feature.properties.Tema === cielo && feature.properties.filtro === 1) return true
    }
    else{
        if (feature.properties.Tema === cielo) return true
    }
}

var poireligiosa = L.geoJSON(poi, {
    filter: func_religiosa,
    pointToLayer: function (feature, latlng) {
        var relMarker = new L.CircleMarker(latlng, {
            radius: 6,
            color: "deeppink",
        });
        if(!Object.keys(markers).includes(cielo)) markers[cielo] = relMarker;
        return relMarker
    }
});

poireligiosa.on("click", function(pointObject){
    let feature = pointObject.layer.feature;
    populatePopupLeftBar(feature);
});

/* Filter data for Genio umano */
function func_antro(feature) {
    if(mappaComplessiva) {
        if (feature.properties.Tema === genio && feature.properties.filtro === 1) return true
    }
    else{
        if (feature.properties.Tema === genio) return true
    }
}

var poiantro = L.geoJSON(poi, {
    filter: func_antro,
    pointToLayer: function (feature, latlng) {
        var antroMarker = new L.CircleMarker(latlng, {
            radius: 6,
            color: "orange",
        });
        if(!Object.keys(markers).includes(genio)) markers[genio] = antroMarker;
        return antroMarker;
    }
});

poiantro.on("click", function(pointObject){
    let feature = pointObject.layer.feature;
    populatePopupLeftBar(feature);
});


/* Filter data for Biodiversità */
function func_bio(feature) {
    if(mappaComplessiva) {
        if (feature.properties.Tema === biodeversiy && feature.properties.filtro === 1) return true
    }
    else{
        if (feature.properties.Tema === biodeversiy) return true
    }
}

var poiBio = L.geoJSON(poi, {
    filter: func_bio,
    pointToLayer: function (feature, latlng) {
        var bioMarker = new L.CircleMarker(latlng, {
            radius: 6,
            color: "green",
        });
        if(!Object.keys(markers).includes(biodeversiy)) markers[biodeversiy] = bioMarker;
        return bioMarker
    }
});

poiBio.on("click", function(pointObject){
    let feature = pointObject.layer.feature;
    populatePopupLeftBar(feature);
});

/*Defines The Basemap and OverlayMaps List*/
var baseMaps = {
    "OSM": OpenStreetMap_Mapnik,
    "Light": light,
    "Satellite": satellite
};
var overlayMaps = {
    '<u class="gold">Abitare nella storia</u>': poistoria,
    '<u class="blu"> Difesa del territorio </u>': poidifesa,
    '<u class="purple"> Strati di terra e di cielo </u>': poireligiosa,
    '<u class="orange"> Genio Umano </u>': poiantro,
    '<u class="green"> Biodiversità </u>': poiBio
};

let layersToUpload = [];

if(mappaComplessiva){
    layersToUpload.push(light, poistoria, poidifesa, poiantro, poireligiosa, poiBio);
} else{
    switch (temaAttivo){
        case history: layersToUpload.push(light, poistoria);var overlayMaps = {
            '<u class="gold">Abitare nella storia</u>': poistoria,
        };  break;
        case biodeversiy: layersToUpload.push(light, poiBio);
            var overlayMaps = {
                '<u class="green"> Biodiversità </u>': poiBio
            };break;
        case difesa: layersToUpload.push(light, poidifesa);
            var overlayMaps = {
                '<u class="blu"> Difesa del territorio </u>': poidifesa,
            };break;
        case genio: layersToUpload.push(light, poiantro);
            var overlayMaps = {
                '<u class="orange"> Genio Umano </u>': poiantro
            };break;
        case cielo: layersToUpload.push(light, poireligiosa);
            var overlayMaps = {
                '<u class="purple"> Strati di terra e di cielo </u>': poireligiosa
            };break;
    }
}


/* Defines the Current Map situation When User First Opened The Page*/
var map = L.map("mapid", {
    center: [45.807325, 8.883786],
    zoom: 11.45,
    minZoom: 8,
    layers: layersToUpload
});

/* Adds The Control Button For Layers */
L.control.layers(baseMaps, overlayMaps).addTo(map);

/* Show tooltip only at a certain zoom level*/
/*    var tooltipThreshold = 15;
    map.on('zoomend', function() {
    if (map.getZoom() < tooltipThreshold) {
    $(".leaflet-tooltip").css("display","none")
} else {
    $(".leaflet-tooltip").css("display","block")
}
})*/

/* Adds the coordinates of the mouse position */
L.control.mousePosition().addTo(map);

const legend = L.control.featureLegend(markers, {
    position: "bottomleft",
    title: "",
    symbolContainerSize: 18,
    symbolScaling: "clamped",
    maxSymbolSize: 24,
    minSymbolSize: 2,
    collapsed: true,
    drawShadows: true,
}).addTo(map);



function populatePopupLeftBar(feature){
    document.getElementById("placeImg").innerHTML = "";
    document.getElementById("titleInfo").innerText = feature.properties['NOME POI (Point of Interest)'];
    document.getElementById("contentInfo").innerText = feature.properties['Abstract'];

    var foto = feature.properties['Foto'];
    if(foto !== ''){
        var img = document.createElement("img");
        img.src = "assets/img/" + feature.properties['Foto'];
        img.setAttribute("height", "100%");
        img.setAttribute("width", "100%");
        document.getElementById("placeImg").appendChild(img);
    }

    var offCanvas = document.getElementById("offcanvasExample");
    var offCanvasPopup = new bootstrap.Offcanvas(offCanvas);
    offCanvasPopup.show();
}

