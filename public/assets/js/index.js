let map;
let mapId = "map";

let parkAreaCampo = "aree_parco/Parco Campo dei Fiori.geojson";
let sentieriCampo = "reti_sentieristiche/parco_campo_dei_fiori.geojson";
let parkAreaGole = "aree_parco/Parco Gole della Breggia.geojson";
let sentieriGole = "reti_sentieristiche/parco_gole della breggia.geojson";
let parkAreaPenz = "aree_parco/Parco del Penz.geojson";
let sentieriPenz = "reti_sentieristiche/parco_penz.geojson";
let parkAreaPineta = "aree_parco/Parco Pineta.geojson";
let sentieriPineta = "reti_sentieristiche/parco_pineta.geojson";
let parkAreaSpina = "aree_parco/Parco Spina Verde.geojson";
let sentieriSpina = "reti_sentieristiche/parco_spina verde.geojson";


function initMap(callback) {
    map = new google.maps.Map(document.getElementById(mapId), {
        center: { lat: 45.86784037556661, lng: 8.76262649612005 },
        zoom: 12,
    });

    var infowindow = new google.maps.InfoWindow();

    var parkArea = new google.maps.Data({map: map});

    parkArea.loadGeoJson(parkAreaCampo);
    parkArea.setStyle({
        fillColor: 'green',
        opacity: 0.6
    })

    var parkArea2 = new google.maps.Data({map: map});

    parkArea2.loadGeoJson(parkAreaGole);
    parkArea2.setStyle({
        fillColor: 'green',
        opacity: 0.6
    })

    var parkArea3 = new google.maps.Data({map: map});

    parkArea3.loadGeoJson(parkAreaPenz);
    parkArea3.setStyle({
        fillColor: 'green',
        opacity: 0.6
    })

    var parkArea4 = new google.maps.Data({map: map});

    parkArea4.loadGeoJson(parkAreaPineta);
    parkArea4.setStyle({
        fillColor: 'green',
        opacity: 0.6
    })

    var parkArea5 = new google.maps.Data({map: map});

    parkArea5.loadGeoJson(parkAreaSpina);
    parkArea5.setStyle({
        fillColor: 'green',
        opacity: 0.6
    })

    createLayers(map, parkArea, sentieriCampo);
    createLayers(map, parkArea2, sentieriGole);
    createLayers(map, parkArea3, sentieriPenz);
    createLayers(map, parkArea4, sentieriPineta);
    createLayers(map, parkArea5, sentieriSpina);

    function createLayers(map, parkArea, sentieriJson){

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
            var centroidindex, lat, long, myLatLng;

            function createMarker() {
                return new google.maps.Marker({
                    position: myLatLng,
                    label: {
                        text: evt.feature.getProperty("sentiero"),
                        color: "#FF0404",
                        className: "labels"
                    },
                    icon: icon
                });
            }

            function handleMarkerClick(event) {
                sentieri.revertStyle();

                var feature = evt.feature;
                sentieri.overrideStyle(feature, {
                    fillColor: "#FF0404", strokeColor: "#FF0404", strokeWeight: 6,
                });

                var html = "<b>" + feature.getProperty('nome');
                if (feature.getProperty('info') !== '' && feature.getProperty('info')) {
                    html += "<br><a class='normal_link' target='_blank' href='" + feature.getProperty('info') + "'>Dettagli</a>";
                }

                infowindow.setContent(html);
                infowindow.setPosition(event.latLng);
                infowindow.setOptions({pixelOffset: new google.maps.Size(0, -34)});
                infowindow.open(map);
            }

            if (evt.feature && evt.feature.getGeometry) {
                var geometry = evt.feature.getGeometry();

                centroidindex = Math.floor(evt.feature.Fg.Fg[0].getLength() / 2);

                if (geometry && geometry.getAt && geometry.getAt(0) && geometry.getAt(0).getAt) {
                    lat = geometry.getAt(0).getAt(centroidindex).lat();
                    long = geometry.getAt(0).getAt(centroidindex).lng();
                    myLatLng = { lat: lat, lng: long };

                    var marker = createMarker();
                    markers.push(marker);
                    marker.addListener('click', handleMarkerClick);
                } else {
                    console.error("Invalid geometry structure");
                }
            } else {
                console.error("Invalid feature or geometry object");
            }

        });


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

        sentieri.setMap(mapToAssign);
        for(var i = 0; i < markers.length; i++){
            marker = markers[i]
            marker.map = mapToAssignMarker
        };


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
