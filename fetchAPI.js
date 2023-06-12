// JavaScrip sincrono

console.log("-----------Aqui empieza ejercicio sebas----------");

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

// function hazClick() {
//     console.log("Haz click en el boton");
// }

// const boton = document.getElementById("boton");
// boton.addEventListener("click", hazClick);


//Ejemplo de Callback

function dobleNumero(num, callback) {
    const resultado = num * 2;
    callback(resultado);
}

// Definir una funcion para mostrar el resultado 
function mostrarResultado(resultado) {
    console.log("El resultado es: ", resultado);
}

dobleNumero(5, mostrarResultado);

/*

Promises (promesas)

Son otro mecanismo para manejar la asincronia. Utilizar promesas hace que el codigo sea más legible y practico que el usar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabes si se va a cumplir pero en el futuro pueden pasar varias cosas.  La gran ventaja de utilizar promesas evitamos anidar muchas funciones y usamos una sola funcion (metodo) para mejorar los callbacks.

NOTA: Las promesas son objetos.

promise.then

promise.catch

Las promesas tienen estados:

- Pendiente (pending): Es el estado inicial de nuestra promesa, aqui aun no tenemos resultado.

- Fullfiled (resolve): Cuando la operación asincrona se completa con exito.

- Rechazo o Rejected (reject): Cuando la operación falla.


Tambien las promesas al ser un objeto tienen metodos.

- then (function resolve): Ejecuta un callback llamado resolve cuando la promesa se cumple.

- catch (funtion reject): Ejecuta un callback llamado reject cuando la promesa se rechaza.


-then (resolve, reject): Puedo ejecurtar las dos funciones en el mismo metodo then.



*/

//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos() {
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function (resolve, reject) { //el objeto maneja dos funciones (resuelto, rechazo)
        fetch('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
            .then(function (response) { //espero respuestas...
                if (response.ok) { //propiedad booleana (si o no hay respuesta)
                    return response.json();//metodo para convertir la respuesta a un objeto .json
                } else { //si no...
                    throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
                }
            })
            .then(function (data) { //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
                resolve(data);
            })
            .catch(function (error) { //Si no hay una respuesta, resulvo con un rechazo.
                reject(error);
            });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function (resultado) {
        console.log(resultado);
    })

    .catch(function (error) {
        console.log(error);
    });


//Otro ejemplo de la promesa para validar un nombre. Si el nombre que estoy evaluando coincide con un valor ya guardado previamente, entonces la promesa se resuelve correctamente. Si no, la promesa se rechaza y me muestra mensaje de error. 

let nombre = "Felipe";

//Que el objeto promesa tiene dos posibles soluciones

let promesaNombre = new Promise(function (resolve, reject) {
    if (nombre !== "Felipe") { //Si el nombre es distinto de Felipe...
        reject("Error!!, El nombre no es Felipe") //Entonces rechaza la promesa
    } else { //Si no...
        resolve("Que bien!, el Nombre es correcto", nombre); //Resuelve la promesa e imprime un dato

    }
})

/*

Ejemplo de PokeAPI

Necesito

    -URL
    -Promesa (Con dos posibles caminos; Rechazo y Resolución)
        -si se resuelve, me traigo los datos de la PokeAPI
        -si no, muestra un error
 */


//Primer bloque para la conexión del servidor
const obtenerPokemon = new Promise((resolve, reject) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/5`) //me conecto
        .then(respueta => { //Cuando se conecte...
            if (respueta.ok) { //Si la conexión es OK
                return respueta.json(); //Guardo el dato en un .json
            } else { //Si no me conecto...
                throw new Error("Error 404"); //muestro el error
            }
        })

        //Segundo Bloque (Cuando ya me conecte al servidor)

        .then(data => { //Entonces esos datos 
            resolve(data); //se usan como parametros de mi resolución
        })

        // Tercer bloque (Solo en caso de que no se encuentre la información )
        .catch(error => {
            reject("Mensaje de error, no encontramos tu Pokemon", + error);
        })

});


// Ya que le di el mensaje a mi mesero (Creación de la promesa), ahora voy a poder mostrar la infomación si la promesa se resuelve (Encuentra la info), o si se rechaza (No encuentra la info)

obtenerPokemon
    .then(pokemon => { //El valor Pokemon = Datos obtenidos del servidor en .JSON
        console.log("Pokemon obtenido ", pokemon.name);
    })
    .catch(error => {
        console.log(error);

    })

/*

Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexion es ok, "pega" la informacion de lo que estamos consultado).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/

//Realizamos la petición al servidor

fetch('https://pokeapi.co/api/v2/pokemon/charizard')
    .then(pokerespuesta => { //Cuando la promesa se resuelve, ejecutamos esta función 
        return pokerespuesta.json(); //Esta función retorna la pokerespuesta en un .Json
    })

    .then(pokeinfo => { //Cuando la promesa de la conexion se resuelve, entonces ejecutamos esta otra function. Esta function guarda la información de la respuesta, y lo guarda en una nueva variable llamada pokeinfo.

        //Uso esa variable para hacer muchas cosas
        console.log("El nombre del pokemon es: ", pokeinfo.name, " Su numero de la pokedex es:  ", pokeinfo.id);
        console.log(pokeinfo);
    })

    .catch(pokeError =>{
        console.log("No encontramos nada de infomración ");
    })
    
    const input = document.getElementById("inputPokemon");
    const button = document.getElementById("botonPokemon");
    const pokemonContainer = document.getElementById("pokemonContainer");
    

    button.addEventListener("click", (e) => {
        e.preventDefault(); //prevenir que el navegador se actualice
        traerPokemon(input.value); //ejecuta la funcion traerPokemon
    }
    );
    //Manipulación del DOM + fetchAPI


    function traerPokemon(nombrePokemon) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        
        //Guardo la respuesta en un .json
        .then(respueta => respueta.json()) //Se resuelve la promesa

        //con ese .json lo asigno a una variable llamada datos, que usare para alimentar una funcion llamada crearPokemon
        .then((datos) =>{
            crearPokemon(datos);
        })
    }

    function crearPokemon(nombrePokemon) {
        const pokeImg = document.createElement("img"); //Creo una etiqueta img
        pokeImg.src = nombrePokemon.sprites.front_default; //front_default es el nombre de la propiedad en la que esta la imagen de mi pokemon.

        const pokeImgShiny = document.createElement("img");
        pokeImgShiny.src = nombrePokemon.sprites.front_shiny;

        const h2 = document.createElement("h2"); //Creo una etiqueta h2
        h2.innerHTML = nombrePokemon.name; //Le pongo el nombre del pokemon en h2
        

        const pokeDiv = document.createElement("div"); //Creamos un div para poner mi pokemon
        
        //Inserto los elementos img y h2 a un div particular de cada pokemon
        pokeDiv.appendChild(pokeImg);
        pokeDiv.appendChild(pokeImgShiny);
        pokeDiv.appendChild(h2);

        //inserto ese div particular en un div general que esta en el html
        pokemonContainer.appendChild(pokeDiv);
    }




