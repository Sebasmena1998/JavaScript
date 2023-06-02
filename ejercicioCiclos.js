//Ejercicio para saber si un numero es primo
let numeroIngresado = prompt("Ingrese su número");
let contador = 2;
var numeroPrimo = true;


while ( numeroPrimo && contador<numeroIngresado ) {
    
    if (numeroIngresado % contador ==0) {
        console.log(numeroIngresado%contador);
        numeroPrimo = false;

         } else{
            console.log(contador);
            contador++
         }

    
}
if (numeroPrimo && numeroIngresado>1) {
    console.log("El numero ' " + numeroIngresado + " ' es un numero primo ");   
} else{
console.log("Su numero no es primo");
}

/*
let numeroIngresado = prompt("Ingrese su número");

let contador = 2;
var primo = true;
while ((primo) && (contador != numeroIngresado)) {
    if (numeroIngresado % contador == 0)
        primo = false;
    contador++;
}
return primo;
  */