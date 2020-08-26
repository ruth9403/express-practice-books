const Express = require('express');
const app = new Express();
/**
 * Aqui iniciamos los Middlewares
 * Con esto se va a parsear la API REST, es decir, se va a convertir en json.
 * "json" parrsea la petición como un json.
 * "unlencoded" trasnforma los parámetros y los querystrings
 */
app.use(Express.json());
app.use(Express.urlencoded());

/**
 * Aqui relacionamos las rutas (importas del archivos) mediante un middleware
*/
app.use(requiere('/src/routes.js'));

/**
 * Aqui iniciamos el listen - el servidor 
*/

app.listen(3000, () =>{
    console.log('el server esta iniciado');
})