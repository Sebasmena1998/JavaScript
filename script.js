//alert("Estoy vivoooooo!!");
console.log("Estatus de la mamá de Bambi " + mamaDeBambiViva);

/*

Variables


Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta varible ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable que tenemos.

Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente


*/
var recipiente;

recipiente = "agua";
recipiente = "Cafe";
recipiente = "colores y lapices";
recipiente = "leche";

//Usamos esta linea de codigo para imprimir o mostrar la información de mi recipiente

console.log(recipiente);


// Declaración vs inicializar;

/*
quieresSerMiNovia;
adad;
altura;
personalbar;
genero;
*/

/*

Tipos de datos (primitivos y no primitivos)

-String: Sirve para agregar valores en forma de texto. Para que se considere asi, el valor debe estar dentro de comillas simples (''), comillas dobles("") y backticks (``)

-Number: Sirve para agregar valores en formato numerico (para poder usarlos en operaciones aritmeticas). Estos valores no usan comillas.

-BooLean: Son datos que sirven para representar valores de "si o no", "verdadero o falso", "Prendido o apagado", "1 y 0", etc.

-Undefined: Sirve para definir un tipo de dato que no tiene valor, Cuando declaramos Variables  sin inicializar, tendremos datos de tipo undefined

-Null: Sirve para definir que un valor es nulo

- NaN (Not at Number): Sirve para representar un valor que no es un numero. Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.

-Symbol:

-Object (no es primitivo)

    */

// Ejemplo de cancatenacion

apodoDeFelipe = "El amante 'numero uno' de los chilaquiles verdes ";
console.log(apodoDeFelipe);

// ejemplo de valores number

edadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

//ejemplos de valores booleanos

esAdministrador = true;
ContraseniaCorrecta = false;
cuentaPremium = true;

//ejemplo de los indefinidos 

//respuetaDeMiCrush; 
//precioBoletosEstacionamiento;

//Ejemplo de valores nulos

respuetaDeMiCrush = null;
console.log(respuetaDeMiCrush);


//ejemplo de valores NaN

operacionMatematica = 0 / 0
console.log(operacionMatematica);

/* typeOf

Es una expresión que nos ayuda a saber que tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de datos que estamos evaluando

*/

console.log(typeof (esAdministrador));
console.log(typeof (edadDeFelipe));
console.log(typeof (operacionMatematica));

console.log(typeof (false));

/*
   Tipos de Variables
   
   En JS tenemos 3 tipos principales de variables:
 
   - var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa. 



    - let: lo usamos para limitar el alcance de nuestras variables (scope) y si limita un bloque de codigo o expresión (meter a la mamá de Bambi en una cajita)

    - const: se usan para declarar una variable con un valor constante o inmutable (que no cambia).




*/


//Es este caso, la mama de Bambi esta visible desde cualquier lugar del programa

var mamaDeBambiViva = false;

var cazador = "listo para disparar";

let nombre = "Sebastian Mendoza";

const pi = 3.1416;


/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon


*/

//1- Creamos la funcion con la palabra reservada function y le ponemos un nombre. Despues, abrimos y cerramos parentesis y abrimos y cerraremos llaves {}. Los parametros son para nuestros parametros o argumentos, y las llaves para delimitar el bloque o la función

//2.- Ponemos nuestros parametros (variables) dentro de los parentesis

//3.- Poner las instrucciones dentro de las llaves, utilizamos los marametros o argumentos

//4.- invocar la función escribiendo su nombre y abrimos y cerramos parentesis.






function prepararAguitaDeLimon( limon, aguita, hielos, azucar, vasito, cucharita) {

var limon = "limon"
var aguita = "aguita"
var hielos = "hielos"
var azucar ="azucar"
var vasito = "vaso"
var cucharita = "cucharita"

    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vasito);
    console.log("Agregar el agua al vaso " + aguita);
    console.log("Agregar los hielos al vaso " + hielos);
    console.log("Endulzar al gusto " + azucar);
    console.log("Mezclar y disfrutar " + cucharita);
    
    var cucharita = "tenedor"
    console.log(cucharita)
}

prepararAguitaDeLimon();

let recipente = "chocomilk";

console.log(recipente);

// ejemplo de las 3 formas de agregar parametros a funciones 
// Primera forma: Usando parametros dentro de parentesis

function suma(a, b){ //valores estan en undefined
    var a = 5; //cambio undefined de "a" por 5
    var b = 7; // cambio undefined de "b" por 7

    operacion = a + b; // Hago mi suma utilizando los dos valores
    console.log(operacion); //Imprimir mi operacion
}

suma (); //Invoco la funcion

//Segunda forma: Usando los valores dentro del parentesis

function resta (a=8, b=5){

    operacion = a -b;
    console.log(operacion); 
}

resta();

// Tercera forma: Inicializando valores dentro de la invocacion

function multiplicacion (a, b){
    operacion = a*b
    console.log(operacion);
}
multiplicacion(3,9);




