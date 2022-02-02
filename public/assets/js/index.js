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
    sentieri.setStyle({
        fillColor: 'red',
        strokeColor: 'red',
        strokeWeight: 3,
    });

    var markers = [];
    var icon = {
        scaledSize: new google.maps.Size(30, 30), // scaled size
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
            debugger;
            var centroidindex = (evt.feature.g.g[0].getLength()) / 2;
            centroidindex = Math.floor(centroidindex);
            const lat = evt.feature.getGeometry().getAt(0).getAt(centroidindex).lat();
            const long = evt.feature.getGeometry().getAt(0).getAt(centroidindex).lng()
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

    });

    sentieri.loadGeoJson(sentieriGeoJSONPath, null, function(){
        addDataLayerListeners(sentieri)
    });


    function addDataLayerListeners(sentieri){
        sentieri.addListener('click', function(event){

            sentieri.revertStyle();

            var feature = event.feature;
            sentieri.overrideStyle(feature, {
                fillColor: "white", strokeColor: "white"
            });

            var html = "<b>"+feature.getProperty('nome');
            if(feature.getProperty('info') !== '' && feature.getProperty('info')){
                html += "<br><a class='normal_link' target='_blank' href='"+feature.getProperty('info')+"'>Dettagli</a>";
            }
            infowindow.setContent(html);
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
            infowindow.open(map);
        })
    }

}
