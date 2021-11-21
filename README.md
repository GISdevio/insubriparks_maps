# What

Creazione di una mappa statica (immagine/poster) in cui vengono caricati dei loghi/marker interattivi.

# Dependencies

La principale dipendenza è ZoomMarker. Si tratta di un plugin di jQuery per gestire immagini e markers.
[ZoomMarker](https://github.com/NoticeVengus/ZoomMarker).


## Version

| version  | date | detail        | 
| :-------:|:----:|:-------------:|
| 0.0.1    | 2021.10.02 | first version   |
| 0.0.2    | 2021.11.06 | updated logo and images   |
| 1.0.0    | 2021.11.20 | First release   |


## Require

| name  | min-version | detail    |
| :-------:|:----:|:-------------:|
| [jQuery](http://jquery.com/)   | 3.3.1  | DOM framework with JavaScript |
| [jquery.mousewheel](http://plugins.jquery.com/mousewheel/)   | 1.6  | jQuery plugin for mouse wheel |
| [Hammer.js](http://hammerjs.github.io/)| 2.0.4| multi touch plugin    |


## Usages

Nessuna particolare istruzione se non quella di utilizzare il "div" container della mappa dichiarato in **index.html** in una qualsiasi altra Web Application dove si vuole integrare questa tipologia di mapping statico (ovviamente tutte le dipendenze css e js vanno importate come fatto nell'index.html).

```
<div id="zoom-marker-div" class="zoom-marker-div" style="margin: auto">
<img class="zoom-marker-img" id="zoom-marker-img-alt" alt="zoom-marker-img-alt" name="zoom-marker-img-alt"  draggable="false"/>
</div>
```

Viene messo a disposizione un **config.js** all'interno del quale è possibile cambiare o aggiungere qualsiasi informazione 
senza dover riscrivere codice.
```
var appConfig = {
'basemapImage': "background.jpg",
'parks': {
'spinaVerde':{
'nome': "Parco Regionale Spina Verde",
'url': "https://insubriparksturismo.eu/parchi/7xfXeonyNJjJ3CIcUCRQ",
'marker': "spinaMarker.png"
},
'pineta': {
'nome': "Parco Pineta",
'url': "https://insubriparksturismo.eu/parchi/s1e8NIHT9onxO0qj8IRK",
'marker': "pinetaMarker.png"
}...
```
