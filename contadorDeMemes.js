
// 1.- Traer o referenciar todos los elemntos de HTML y los vamos a guardar en variables para poder utilizar despues


//Metodos de seleccion 

let numeroContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("buttonIncrementar");
let botonDecremento = document.getElementById("buttonDecrementar");
let botonResetear = document.querySelector("#buttonResetear");
let memeRandom = document.querySelector("#memeRandom");

//Declarar  una variable con un estado inicial
var valorContador = 0;


//Logica de Negocio

function incrementar(params) {
    valorContador++;
    numeroContador.innerHTML = valorContador;

    if (valorContador == 10) {
        mostrarImagen();

    }
}
function decrementar(params) {
    valorContador--;
    numeroContador.innerHTML = valorContador;
    if (valorContador<=9) {
        memeRandom.style.display = "none";
        
    }

}
function resetear(params) {
    valorContador = 0;
    numeroContador.innerHTML = valorContador;
    memeRandom.style.display = "none"
}


//Función para mostrar la imagen

//La intención de esta función es que cuando sea invocada, recorra el arreglo y tome uno de los elemntos de forma aleatoria (index)
function mostrarImagen(params) {

    var coleccionImagenes = ["./assets/meme1.png", "./assets/meme2.png", "./assets/meme3.png", "./assets/meme4.png"]


    //Generar un indice aleatorio
    let indexRandom = Math.floor(Math.random() * coleccionImagenes.length);


    //Obtener la URL o direccion de la imagen

    let urlAleatoria = coleccionImagenes[indexRandom];

    //Agrego la URL al atributo src que deje vacio en el HTML y tambien cambio la propiedad de visualizacion (display) a un block
    memeRandom.src = urlAleatoria;
    memeRandom.style.display = "block";

}

    /*Eventos (accion y reaccion)
    
    Los eventos son una forma mucho mas facil de modificar o alterar el contenido de un elemento. Los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de JS
    
    
    
    */

    botonIncremento.addEventListener("click",incrementar);
    botonDecremento.addEventListener("click", decrementar);
    botonResetear.addEventListener("click", resetear);

