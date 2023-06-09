// JavaScrip sincrono

console.log("Inicia sincrono");

function dosSync() {
    console.log("Se ejecuta la función 2");
}

function unoSync() {
    console.log("Se ejecuta la función 1");
    dosSync();
    console.log("Se ejecuta el codigo 3");
}

unoSync();
console.log("Fin de Sincrono");

function separador() {

    console.log("<---------------------------->");

}

separador();


/* 
Ejemplos de Tareas sincronas


-Ciclos
-Invocaciones a funciones
-EventListener (Especificamente cuando se necesitan los clicks)
-Promps y Alerts

 */




// JavaScript asincrono
console.log("Inicio de Asincrono");

function dosAsync() {
    setTimeout(function () {
        console.log("Dos");
    }, 5000); //Tiempo en Milisegundos
}


function unoAsync() {
    console.log("Uno");
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Fin de Asincrono");


/*

 * Funciones setTimeout
 * Notificaciones de cierre de sesion en apps bancarias
 * Spotify con su cola de reproducción
 * Conexiones a servidor
 * Cargas de APIs
  
 */


/*

Ya que entendemos que la Asincronia nos servira para conectarnos a un servidor, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay varios mecanismos para maneras operaciones asincronas JS.


-Callbacks (llamadas de vuelta): la forma más clasica de gestionar la asincronia

-Promise (Promesa): Forma moderna

-Async/Await: forma moderna con una sintaxis más ligera

*/



/*

Que es un callback (llamada de vuelta)

Un callback es una función que se pasa como argumento a otra funcion. Esta funcion se ejecutara despues de que otra lo haga. Este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro se termine.

Para que la necesitamos?
Sabemos que JS trabaja de forma descendente, entonces habra casos que queremos hacer que un codigo se ejecute despues de que ocurra otra cosa, y de forma no secuencial.
*/

function hazClick() {
    console.log("Haz click en el boton");
}

const boton = document.getElementById("boton");
boton.addEventListener("click", hazClick);


//Ejemplo de Callback

function dobleNumero(num, callback) {

    const resultado = num * 2;
    callback(resultado);
}

// Definir una funcion para mostrar el resultado 
function mostrarResultado() {
    console.log("El resultado es: ", resultado);    
} 

dobleNumero (5, mostrarResultado)