
/******************** INIT ZoomMarker here *****************************/
// TODO: Creare immagine con nomi parki già inseriti e poi aggiungere il resto tramite icons
$(document).ready(function () {

    $('#zoom-marker-img-alt').zoomMarker({
        src: "assets/img/" + appConfig.basemapImage,
        rate: 0.2,
        max: 500,
        min: 500,
        enable_drag: false,
        zoom_lock: true,
        move_limit: true,
        markers:[
            // ---------------------------- Parks Marker ------------------------------------------
            {
                src:"assets/img/" + appConfig.parks.pineta.marker,
                x:752,
                y:977,
                size: 50,
                dialog:{
                    value: appConfig.parks.popup.text,
                    style: appConfig.parks.style
                },
                draggable: false,
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },                {
                src:"assets/img/" + appConfig.parks.spinaVerde.marker,
                x:1008,
                y:753,
                size: 50,
                dialog:{
                    value: appConfig.parks.popup.text,
                    style: appConfig.parks.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },{
                src:"assets/img/" + appConfig.parks.gole.marker,
                x:874,
                y:409,
                size: 50,
                dialog:{
                    value: appConfig.parks.popup.text,
                    style: appConfig.parks.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },{
                src:"assets/img/" + appConfig.parks.campo.marker,
                x:350,
                y:585,
                size: 50,
                dialog:{
                    value: appConfig.parks.popup.text,
                    style: appConfig.parks.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },{
                src:"assets/img/" + appConfig.parks.penz.marker,
                x:759,
                y:635,
                size: 50,
                dialog:{
                    value: appConfig.parks.popup.text,
                    style: appConfig.parks.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },

            // ---------------------------- Railway Stations Marker ------------------------------------------
            {
                src:"assets/img/" + appConfig.stazioni.como1.marker,
                x:1141,
                y:705,
                size: 18,
                dialog:{
                    value: appConfig.stazioni.como1.nome,
                    style: appConfig.stazioni.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.stazioni.como2.marker,
                x:1194,
                y:663,
                size: 18,
                dialog:{
                    value: appConfig.stazioni.como2.nome,
                    style: appConfig.stazioni.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.stazioni.gole.marker,
                x:952,
                y:551,
                size: 18,
                dialog:{
                    value: appConfig.stazioni.gole.nome,
                    style: appConfig.stazioni.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.stazioni.pineta.marker,
                x:605,
                y:1011,
                size: 18,
                dialog:{
                    value: appConfig.stazioni.pineta.nome,
                    style: appConfig.stazioni.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.stazioni.varese1.marker,
                x:481,
                y:781,
                size: 18,
                dialog:{
                    value: appConfig.stazioni.varese1.nome,
                    style: appConfig.stazioni.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.stazioni.varese2.marker,
                x:445,
                y:797,
                size: 18,
                dialog:{
                    value: appConfig.stazioni.varese2.nome,
                    style: appConfig.stazioni.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.stazioni.mendrisio.marker,
                x:792,
                y:521,
                size: 18,
                dialog:{
                    value: appConfig.stazioni.mendrisio.nome,
                    style: appConfig.stazioni.style
                },
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },


            // ---------------------------- Airports Marker ------------------------------------------
            /*                {
                                src:"assets/img/" + appConfig.aereoporti.lugano.marker,
                                x:1630,
                                y:378,
                                size: 60,
                                dialog:{
                                    value: appConfig.aereoporti.lugano.nome,
                                    style: appConfig.aereoporti.style
                                },
                                draggable: false
                                //hint:{value:'M', style:{color:"green", left:"12px"}}
                            }, {
                                src:"assets/img/" + appConfig.aereoporti.linate.marker,
                                x:3009,
                                y:2515,
                                size: 60,
                                dialog:{
                                    value: appConfig.aereoporti.linate.nome,
                                    style: appConfig.aereoporti.style
                                },
                                draggable: false
                                //hint:{value:'M', style:{color:"green", left:"12px"}}
                            }, {
                                src:"assets/img/" + appConfig.aereoporti.malpensa.marker,
                                x:509,
                                y:2515,
                                size: 60,
                                dialog:{
                                    value: appConfig.aereoporti.malpensa.nome,
                                    style: appConfig.aereoporti.style
                                },
                                draggable: false
                                //hint:{value:'M', style:{color:"green", left:"12px"}}
                            },*/

            // ---------------------------- Cities Marker ------------------------------------------
            {
                src:"assets/img/" + appConfig.comuni.chiasso.marker,
                x:878,
                y:561,
                size: 40,
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.comuni.mendrisio.marker,
                x:790,
                y:483,
                size: 40,
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.comuni.como.marker,
                x:1189,
                y:733,
                size: 40,
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.comuni.varese.marker,
                x:422,
                y:765,
                size: 40,
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            },
            {
                src:"assets/img/" + appConfig.comuni.milano.marker,
                x:1154,
                y:1263,
                size: 32,
                draggable: false
                //hint:{value:'M', style:{color:"green", left:"12px"}}
            }

        ]
    });
})


setTimeout(function () {
    $('#zoom-marker-img-alt11').css('cursor','default');
    $('#zoom-marker-img-alt11').css('z-index','982');
    $('#zoom-marker-img-alt12').css('cursor','default');
    $('#zoom-marker-img-alt13').css('cursor','default');
    $('#zoom-marker-img-alt14').css('cursor','default');
    $('#zoom-marker-img-alt15').css('cursor','default');
    $('#zoom-marker-img-alt5').css('cursor','default');
    $('#zoom-marker-img-alt5').css('z-index','982');
    $('#zoom-marker-img-alt6').css('cursor','default');
    $('#zoom-marker-img-alt6').css('z-index','982');
    $('#zoom-marker-img-alt7').css('cursor','default');
    $('#zoom-marker-img-alt7').css('z-index','982');
    $('#zoom-marker-img-alt8').css('cursor','default');
    $('#zoom-marker-img-alt8').css('z-index','982');
    $('#zoom-marker-img-alt9').css('cursor','default');
    $('#zoom-marker-img-alt9').css('z-index','982');
    $('#zoom-marker-img-alt10').css('cursor','default');
    $('#zoom-marker-img-alt10').css('z-index','982');
}, 1000);


$('#zoom-marker-img-alt').on("zoom_marker_click", function(event, marker){
    let basePath = "assets/img/";
    switch (marker.param.src){
        case basePath + appConfig.parks.spinaVerde.marker: window.open(appConfig.parks.spinaVerde.url, '_blank');
        case basePath + appConfig.parks.pineta.marker: window.open(appConfig.parks.pineta.url, '_blank');
        case basePath + appConfig.parks.gole.marker: window.open(appConfig.parks.gole.url, '_blank');
        case basePath + appConfig.parks.campo.marker: window.open(appConfig.parks.campo.url, '_blank');
        case basePath + appConfig.parks.penz.marker: window.open(appConfig.parks.penz.url, '_blank');
    }
});

// THIS FUNCTION JUST TO PLACE EASILY THE MARKERS
/*    $('#zoom-marker-img-alt').on("zoom_marker_mouse_click", function(event, mouseObj){
        console.log(mouseObj.x + " / " + mouseObj.y)
    });*/


/******************** INIT ZoomMarker here *****************************/
