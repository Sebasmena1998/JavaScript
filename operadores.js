/*

Operadores 

los operadores nos permiten realizar una operación en uno o varios operandos (Variables o datos)

-Operaciones de asignación
-Operadores de cadena
-Operadores Logicos
-Operadores de comparación
-Operadores aritmeticos
 


Operaciones de asignación (=)

Los operadores de asignación (=) se utilizan para asignarle valor a una variable. Signa un valor a la operando de la izquierda basado en el valor del operador de la derecha.


 */


//Operadores de asignación

let edadFelipe = 31;
var recipiente = "cafe";


/*

Operadores de comparacion (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de comparacion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus valores.


*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";
let veinticinco = 25    

console.log("EL valor 13 es menor que el valor 25 " + (numero1<numero2));

console.log("EL valor 13 es menor que el valor 25 " + (numero1>numero2));

console.log("EL valor 25 es menor o igual que el valor 25 " + (numero2>=numero3));

//Operador de igualdad solo evalua valores

console.log("EL valor de 25 es igual que el valor 25 " + (numero2==numero3));

//Operador de igualdad estricta (Evalua el valor y el tipo de dato) 

console.log("EL valor 25 es igual estricto que el valor 25 " + (numero2===numero3));

//Otro ejemplo de operador de igualdad estricta 

console.log("EL valor 25 es igual que el valor 25 " + (25 === "veinticinco"));

//Operador de desigualdad (!=)

console.log("EL valor 13 no es igual que el valor 25 " + (numero1 != numero2));

//Operador de desigualdad estricta (!==)

console.log("EL valor 25 no es igual que el valor 25 " + (numero2 !== numero3));




console.log("Aqui van los ejercicios de Felipe para ver diferencias");

let numero1f = 13;
let numero2f = 25;
let numero3f = "25";
let veinticincof = 25;

//Operador menor que
console.log("El valor 13 es menor que el valor 25? " + (numero1f<numero2f)); 

//Operador mayor que
console.log("El valor 13 es menor que el valor 25? " + (numero1f>numero2f));

//Operador mayor o igual que
console.log("El valor 25 es mayor o igual que el valor 25? " + (numero2f>=numero3f));

//Operador de igualdad solo evaluea valores
console.log("El valor 25 es igual que el valor 25? " + (numero2f == numero3f));

//Operador de igual estricta (evalua el valor y evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2f === numero3f));

//Otro ejemplo de operador de igualdad estricta
console.log("El valor 25 es igual que el valor 25? " + (25 === "veinticincof"));

//Operador de desigualdad (!=)
console.log("El valor 13 no es igual al valor 25? " + (numero2f != numero3f));

//Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? " + (numero2f !== numero3f));





/*
Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).


AND (&&)

Sirve para determinar si dos expresiones son verdaderas. 

    - Si ambas expresiones son verdaderas, el resultado es verdadero. 
    - Si una de las dos expresiones es falsa, todo el resultado es falso.




OR (||)

Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.



NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo


*/

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 < num2); //Verdadero
afirmacion2 = (num1 != num2); //Verdadero

//console.log(afirmacion1 && afirmacion2); // Imprime true porque ambas afirmaciones son verdaderas


//Ejemplo con OR (||)

afirmacion3 = (num1 < num2); //verdadero
afirmacion4 = (num1 !== num2); //verdadero

//console.log(afirmacion3 || afirmacion4); 

//Ejemplo con not (!)

console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso

//Ejercicio de combinacion de operaciones

console.log("Aqui empiezan los ejercicios");

num1 = 12;

num2 = 24;

num3 = 25;

num4 = 92;

num5 = 91;

op =(num1 < num2 || num2 < numero3) && ((num1 != num2) && num5 != numero3);

console.log(op);


//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

// -------true---and-----false----------------true------or---- false----------
// -------------false--------------or------------------true-------------------
//--------------------------------true----------------------------------------


console.log (op2);


/*
Operadores aritmeticos

*/

console.log("Operadores aritmeticos");

let valor1 = 55;
let valor2 = 17;


console.log("suma: " + valor1 + valor2 ); // Toma las variables Num como valores string

console.log("suma: " + (valor1 + valor2) ); // Lo toma de la manera deseada (realiza la operacion)

console.log("suma: ",  (valor1 + valor2 )); // Lo toma de la manera deseada (realiza la operacion)

console.log("suma: ",  valor1 + valor2 ); // Lo toma de la manera deseada (realiza la operacion)

console.log("Resta: ",  valor1 - valor2 )

console.log("Multiplicacion: ",  valor1 * valor2 )

console.log("Division: ",  valor1 / valor2 );

console.log("Residuo: ",  valor1 % valor2 )

console.log("Exponente: ", valor1 ** valor2 );

/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}

*/

//Ejemplo de Switch


let pisoDestino = prompt("Ingresa al piso al que quieras ir (1 al 5)");

switch (pisoDestino) {
    case "1":
        console.log("Vamos al piso 1(Suena musica de elevador de fondo)");
        
        break;

        case "2":
        console.log("Vamos al piso 2(Suena musica de elevador de fondo)");
        
        break;

        case "3":
        console.log("Vamos al piso 3(Suena musica de elevador de fondo)");
        
        break;

        case "4":
        console.log("Vamos al piso 4(Suena musica de elevador de fondo)");
        
        break;
        
        case "5":
        console.log("Vamos al piso 5(Suena musica de elevador de fondo)");
        
        break;

    default:
        console.log("Ingresaste un piso que no es valido")
        break;
}