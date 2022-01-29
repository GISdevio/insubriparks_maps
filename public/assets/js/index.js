let map;
let mapId = "map";
let parkAreaGeoJSONPath = "aree_parco/Parco Campo dei Fiori.geojson";
let sentieriGeoJSONPath = "reti_sentieristiche/parco_campo dei fiori.geojson";

function initMap() {
    map = new google.maps.Map(document.getElementById(mapId), {
        center: { lat: 45.86784037556661, lng: 8.76262649612005 },
        zoom: 12,
    });
    var infowindow = new google.maps.InfoWindow();

    var parkArea = new google.maps.Data({map: map});

    parkArea.loadGeoJson(parkAreaGeoJSONPath);
    parkArea.setStyle({
        fillColor: 'green',
        opacity: 0.6
    })

    var sentieri = new google.maps.Data({map: map});
    var markers = [];
    var icon = {
        scaledSize: new google.maps.Size(20, 20), // scaled size
        url: 'assets/img/white.png'
    }
    google.maps.event.addListener(map, 'zoom_changed', function(e) {
        if(map.zoom >= 12) {
            sentieri.setMap(map);
            for(let i = 0; i < markers.length; i++){
                markers[i].setMap(map)
            }
        }
        else {
            sentieri.setMap(null);
            for(let i = 0; i < markers.length; i++){
                markers[i].setMap(null)
            }
        }
    });

    sentieri.addListener('addfeature', function(evt) {
            const lat = evt.feature.getGeometry().getAt(0).getAt(0).lat();
            const long = evt.feature.getGeometry().getAt(0).getAt(0).lng()
            const myLatLng = { lat: lat, lng: long };
            var mapToAssign = "";
            map.zoom >= 12 ? mapToAssign = map : mapToAssign = null;
            var marker = new google.maps.Marker({
                position: myLatLng,
                label: evt.feature.getProperty("sentiero"),
                icon: icon,
                map: mapToAssign
            });
            sentieri.setMap(mapToAssign);
            markers.push(marker);

            //TODO: Cluster marker
    });

    sentieri.loadGeoJson(sentieriGeoJSONPath, null, function(){
        addDataLayerListeners(sentieri)
    });

    sentieri.setStyle({
        fillColor: 'red',
        strokeColor: 'red',
        strokeWeight: 3,
    });

    function addDataLayerListeners(sentieri){
        sentieri.addListener('click', function(event){
            var feature = event.feature;
            var html = "<b>"+feature.getProperty('nome');
            html += "<br><a class='normal_link' target='_blank' href='"+feature.getProperty('info')+"'>Sito Web</a>";
            infowindow.setContent(html);
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
            infowindow.open(map);
        })
    }

}
