/**
 * Aqui creamos las constantes globales con los parametros que vamos a emplear para crear las rutas (request y response), los cuales son parametros de la librería de Express, y los llamamos con un destructuring al importar nuevamente express.
 * 
*/
const {request, response} = require('express');

/**
 * creamos el router, el cual es un metodo de express, es el enrutador, y lo importamos mediante el métofo .Router() de la librería
*/
const router = requiere('express').Router();