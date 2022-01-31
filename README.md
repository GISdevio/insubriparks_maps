# What

Crazione di una mappa dinamica per la rappresentazione dei punti di interesse (POI) sui sentieri dell'Insubriparks.

# Dependencies
L'unica dipendenza è la API Key delle Maps Google API. Questa può essere sostituita nel file index.html (quando viene
importata la libreria maps google api.)


## Version

| version  | date | detail        | 
| :-------:|:----:|:-------------:|
| 0.0.1    | 2021.01.31 | first version   |

## Require

| name  | min-version | detail    |
| :-------:|:----:|:-------------:|
| [jQuery](http://jquery.com/)   | 3.3.1  | DOM framework with JavaScript |
| [jquery.mousewheel](http://plugins.jquery.com/mousewheel/)   | 1.6  | jQuery plugin for mouse wheel |
| [bootstrap](https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js)| 5.0.0| Offcanvas Popup    |
| [Maps Google API](https://maps.googleapis.com/maps/api/js)| 3.0.0| Maps Google API   |


## Usages
In questa demo viene proposta una soluzione per la visualizzazione dei POI dei Sentieri dell'Insubriparks.
Quindi quanto presente nel file **index.js** va replicato per ciascuna mappa che si vuole creare, andando a cambiare il
**temaAttivo** configurabile nell'index.js. 

Nel caso in cui occorrano tutti i POIs senza divisione di tipologia, occorrerà configurare nell'index.js il parametro
**mappaComplessiva** a True. In questo modo verranno visualizzati tutti i POI's
