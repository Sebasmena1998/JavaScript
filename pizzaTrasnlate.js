//1.- Creamos la función Traductor con el parametro word que va a ser un "string" que vamos a dar al llamar a la función
function traductor(word) {

    // 2.-Creamos la variable frase que es igual a la variable word separada por letra 
    let frase = word.split("");   
   
    // 3.- hacemos un ciclo for donde el index va a ser igual a 0 hasta la longitud que va a tener el numero de caracteres que tenga la variable word
    for (let index = 0; index <word.length; index++) {
   
        // frase se volvio un array donde cada "letra" va a tener un posición 
        //4.- hacemos que frase cambie el valor del array por la palabra pizza y ocupamos index para cambiar la posición que va ir cambiando
        frase[index] = "pizza";      
    }
    // 5.- imprimimos el resultado despues del ciclo for 
    console.log("La palabra que escogiste fue "+ word +" y despues de pizzatranslate es: " + frase);
}
// 6.- LLamamos a la función con el parametro de la palabra en formato string;
let word = prompt("Escriba la palabra que quiere traducir: ");

traductor(word);

// Borradores del codigo

console.log("---------Separador-----------"); 

// -----Nota de split ------ Si al separar el split("") las comillas van juntas se va a separa por cada letra como en la variable nombreSeparado y si hay un espacio va a dividir cada palabra como en las variables primerNombre y apellido

let nombre = 'Ivan Rivalcoba';
let [primerNombre, apellido] = nombre.split(' ');
let nombreSeparado = primerNombre.split("");
console.log("Su nombre es ", primerNombre, "Y su apellido es ", apellido);
console.log("Su nombre separado es ", nombreSeparado);
