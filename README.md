# What

Creazione di una mappa dinamica basata sulle Maps Google API in cui vengono caricati due layer: aree Parco e Sentieri.

# Dependencies
L'unica dipendenza è la API Key delle Maps Google API. Questa può essere sostituita nel file index.html (quando viene
importata la libreria maps google api.) 


## Version

| version  | date | detail        | 
| :-------:|:----:|:-------------:|
| 0.0.1    | 2022.29.01 | first version   |

## Require

| name  | min-version | detail    |
| :-------:|:----:|:-------------:|
| [jQuery](http://jquery.com/)   | 3.3.1  | DOM framework with JavaScript |
| [jquery.mousewheel](http://plugins.jquery.com/mousewheel/)   | 1.6  | jQuery plugin for mouse wheel |
| [infoBox](https://cdn.jsdelivr.net/gh/googlemaps/v3-utility-library@master/archive/infobox/src/infobox.js)| 3.0.0| Label Plugin    |
| [Maps Google API](https://maps.googleapis.com/maps/api/js)| 3.0.0| Maps Google API   |


## Usages
In questa demo viene proposta una soluzione per la visualizzazione di sentieri e area parco nello specifico per il parco
Campo dei fiori. Quindi quanto presente nel file **index.js** va replicato per ciascuna mappa già presente sul sito di 
riferimento. 

Per ciascuna di queste mappe vanno modificati i seguenti riferimenti all'interno di **index.js**:
mapId: id della Mappa all'interno del quale si vogliono aggiungere questi nuovi dati/funzionalità;
parkAreaGeoJSONPath: relative path del GeoJSON dell' Area del Parco;
sentieriGeoJSONPath: relative path del GeoJSON dei Sentieri. 


