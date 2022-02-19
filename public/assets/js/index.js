let map;
let mapId = "map";

let parkAreaCampo = "aree_parco/Parco Campo dei Fiori.geojson";
let sentieriCampo = "reti_sentieristiche/parco_campo dei fiori.geojson";
let parkAreaGole = "aree_parco/Parco Gole della Breggia.geojson";
let sentieriGole = "reti_sentieristiche/parco_gole della breggia.geojson";
let parkAreaPenz = "aree_parco/Parco del Penz.geojson";
let sentieriPenz = "reti_sentieristiche/parco_penz.geojson";
let parkAreaPineta = "aree_parco/Parco Pineta.geojson";
let sentieriPineta = "reti_sentieristiche/parco_pineta.geojson";
let parkAreaSpina = "aree_parco/Parco Spina Verde.geojson";
let sentieriSpina = "reti_sentieristiche/parco_spina verde.geojson";


function initMap() {
    map = new google.maps.Map(document.getElementById(mapId), {
        center: { lat: 45.86784037556661, lng: 8.76262649612005 },
        zoom: 12,
    });

    var infowindow = new google.maps.InfoWindow();

    createLayers(map, parkAreaCampo, sentieriCampo);
    createLayers(map, parkAreaGole, sentieriGole);
    createLayers(map, parkAreaPenz, sentieriPenz);
    createLayers(map, parkAreaPineta, sentieriPineta);
    createLayers(map, parkAreaSpina, sentieriSpina);

    function createLayers(map, park, sentieriJson){
        var parkArea = new google.maps.Data({map: map});

        parkArea.loadGeoJson(park);
        parkArea.setStyle({
            fillColor: 'green',
            opacity: 0.6
        })

        var sentieri = new google.maps.Data({map: map});
        sentieri.setStyle({
            strokeColor: '#db0909',
            strokeWeight: 2
        });

        map.addListener("click", () => {
            sentieri.revertStyle();
            if (infowindow) {
                infowindow.close();
            }
        }, {passive: true});

        google.maps.event.addListener(infowindow, 'closeclick', function() {
            sentieri.revertStyle();
        }, {passive: true});
        parkArea.addListener("click", () =>{
            sentieri.revertStyle();
            if (infowindow) {
                infowindow.close();
            }
        }, {passive: true})


        var markers = [];
        var icon = {
            scaledSize: new google.maps.Size(30, 30), // scaled size
            url: 'assets/img/white.png',
        }
        google.maps.event.addListener(map, 'zoom_changed', function(e) {
            if(map.zoom >= 12) {
                sentieri.setMap(map);
                for(let i = 0; i < markers.length; i++){
                    markers[i].setMap(null)
                }
                if(map.zoom >= 13){
                    for(let i = 0; i < markers.length; i++){
                        markers[i].setMap(map)
                    }
                }
            }
            else {
                sentieri.setMap(null);
                for(let i = 0; i < markers.length; i++){
                    markers[i].setMap(null)
                }
            }
        }, {passive: true});


        sentieri.addListener('addfeature', function(evt) {
            // use h o g
            if(evt.feature.h){
                var centroidindex = (evt.feature.h.h[0].getLength()) / 2;
                centroidindex = Math.floor(centroidindex);
                const lat = evt.feature.getGeometry().getAt(0).getAt(centroidindex).lat();
                const long = evt.feature.getGeometry().getAt(0).getAt(centroidindex).lng()
                const myLatLng = { lat: lat, lng: long };
                var mapToAssign = "";
                var mapToAssignMarker = "";
                if(map.zoom >= 12){
                    mapToAssign = map
                    mapToAssignMarker = null
                    if(map.zoom >= 13){
                        mapToAssignMarker = map
                    }
                }else{
                    mapToAssign = null
                    mapToAssignMarker = null
                }
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    label: {
                        text: evt.feature.getProperty("sentiero"),
                        color: "#FF0404",
                        className: "labels"
                    },
                    icon: icon,
                    map: mapToAssignMarker
                });
                sentieri.setMap(mapToAssign);
                markers.push(marker);
            } else if(evt.feature.g){
                var centroidindex = (evt.feature.g.g[0].getLength()) / 2;
                centroidindex = Math.floor(centroidindex);
                const lat = evt.feature.getGeometry().getAt(0).getAt(centroidindex).lat();
                const long = evt.feature.getGeometry().getAt(0).getAt(centroidindex).lng()
                const myLatLng = { lat: lat, lng: long };
                var mapToAssign = "";
                var mapToAssignMarker = "";
                if(map.zoom >= 12){
                    mapToAssign = map
                    mapToAssignMarker = null
                    if(map.zoom >= 13){
                        mapToAssignMarker = map
                    }
                }else{
                    mapToAssign = null
                    mapToAssignMarker = null
                }
                var marker = new google.maps.Marker({
                    position: myLatLng,
                    label: {
                        text: evt.feature.getProperty("sentiero"),
                        color: "#FF0404",
                        className: "labels"
                    },
                    icon: icon,
                    map: mapToAssignMarker
                });
                sentieri.setMap(mapToAssign);
                markers.push(marker);
            }


        }, {passive: true});



        sentieri.loadGeoJson(sentieriJson, null, function(){
            addDataLayerListeners(sentieri)
        });
    }


    function addDataLayerListeners(sentieri){
        sentieri.addListener('click', function(event){

            sentieri.revertStyle();

            var feature = event.feature;
            sentieri.overrideStyle(feature, {
                fillColor: "#FF0404", strokeColor: "#FF0404", strokeWeight: 6,
            });

            var html = "<b>"+feature.getProperty('nome');
            if(feature.getProperty('info') !== '' && feature.getProperty('info')){
                html += "<br><a class='normal_link' target='_blank' href='"+feature.getProperty('info')+"'>Dettagli</a>";
            }
            infowindow.setContent(html);
            infowindow.setPosition(event.latLng);
            infowindow.setOptions({pixelOffset: new google.maps.Size(0,-34)});
            infowindow.open(map);
        }, {passive: true})
    }

}
