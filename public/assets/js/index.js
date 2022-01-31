let map;
let mapId = "map";
let poiGeoJSONPath = "poi/sample_POI.geojson";
let history = "Abitare nella storia";
let biodeversiy = "Biodiversità";
let difesa = "Difesa del territorio";
let genio = "Genio Umano";
let cielo = "Strati di terra e di cielo";

let mappaComplessiva = true;
let temaAttivo = history;

let markers = [];
let icon;

function initMap() {
    map = new google.maps.Map(document.getElementById(mapId), {
        center: { lat: 45.86784037556661, lng: 8.76262649612005 },
        zoom: 12,
    });

    var poi = new google.maps.Data();
    var visibility;


    google.maps.event.addListener(map, 'zoom_changed', function(e) {
        map.zoom >= 12 ? visibility = true : visibility = false
        for (let i = 0; i < markers.length; i++){
            markers[i].visible = visibility;
        }
    });

    var iconHistory = {
        url: "assets/img/marker-icon-orange.png",
        scaledSize: new google.maps.Size(30, 40)
    };
    var iconBiodeversiy = {
        url: "assets/img/marker-icon-red.png",
        scaledSize: new google.maps.Size(30, 40)
    };
    var iconDifesa = {
        url: "assets/img/marker-icon-grey.png",
        scaledSize: new google.maps.Size(30, 40)
    };
    var iconGenio = {
        url: "assets/img/marker-icon-gold.png",
        scaledSize: new google.maps.Size(30, 40)
    };
    var iconCielo = {
        url: "assets/img/marker-icon-blue.png",
        scaledSize: new google.maps.Size(30, 40)
    }

    poi.loadGeoJson(poiGeoJSONPath, null, function(){
        if(mappaComplessiva){
            poi.forEach(function(feature){
                if(feature.getProperty('filtro') === 0){
                    poi.remove(feature);
                } else{
                    icon = assignIcon(feature);
                    addMarker(feature, icon);
                }
            });
        } else{
            poi.forEach(function(feature){
                if(feature.getProperty('Tema') !== temaAttivo){
                    poi.remove(feature);
                } else{
                    icon = assignIcon(feature);
                    addMarker(feature, icon);
                }
            });
        }

    });

    function assignIcon(feature){
        switch (feature.getProperty('Tema')){
            case history: icon = iconHistory; break;
            case biodeversiy: icon = iconBiodeversiy; break;
            case difesa: icon = iconDifesa; break;
            case genio: icon = iconGenio; break;
            case cielo: icon = iconCielo; break;

        }
        return icon
    }

    function addMarker(feature, icon){
        var lat = feature.getGeometry().get().lat();
        var lng = feature.getGeometry().get().lng();
        var latLng = new google.maps.LatLng(lat, lng);
        //Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            icon: icon
        });
        markers.push(marker);

        google.maps.event.addListener(marker, 'click', function() {
            populatePopupLeftBar(feature);
        });
    }


    function populatePopupLeftBar(feature){
        document.getElementById("placeImg").innerHTML = "";
        document.getElementById("titleInfo").innerText = feature.getProperty('NOME POI (Point of Interest)');
        document.getElementById("contentInfo").innerText = feature.getProperty('Abstract');

        var foto = feature.getProperty('Foto');
        if(foto !== ''){
            var img = document.createElement("img");
            img.src = "assets/img/" + feature.getProperty('Foto');
            img.setAttribute("height", "100%");
            img.setAttribute("width", "100%");
            document.getElementById("placeImg").appendChild(img);
        }

        var offCanvas = document.getElementById("offcanvasExample");
        var offCanvasPopup = new bootstrap.Offcanvas(offCanvas);
        offCanvasPopup.show();
    }

}
