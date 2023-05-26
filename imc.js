/*
console.log("Ejercicio 4");


var altura = prompt("Ingrese su altura en centrimetros");
var masa = prompt("Ingrese su masa en Lb");


function imc() {


    const centrimetrosAMetro = 100;
    var alturaEnMetros = altura / centrimetrosAMetro;
    const librasAKilogramos = 0.453592;
    var masaEnKilogramos = masa * librasAKilogramos;

    var calcularIMC = masaEnKilogramos / (alturaEnMetros ** 2);

    if (calcularIMC <= 16) {

        console.log("Criterio de ingreso.")
    } else if (calcularIMC > 16 && calcularIMC <= 16.9) {

    estado ="Infrapeso";
    } else if (calcularIMC > 16.9 && calcularIMC <= 18.4) {
        estado ="Bajo Peso."
    } else if (calcularIMC > 18.4 && calcularIMC <= 24.9) {
        estado = "Peso normal."
    } else if (calcularIMC > 24.9 && calcularIMC <= 29.9) {
        estado = "Sobrepeso."
    } else if (calcularIMC > 29.9 && calcularIMC <= 34.9) {
        estado = "Obesidad premórbida."
    } else if (calcularIMC > 34.9 && calcularIMC <= 45) {
        estado = "Obesidad mórbida."
    } else {

        estado = "Obesidad hipermórbida."

    }
   

    console.log("Su IMC es de ", calcularIMC, "uste tiene", estado)
}

imc();
*/


console.log("Calcular IMC");

///////////////////////////Variables

let peso = prompt("Ingresa tu peso en libras");
let altura = prompt("Ingresa tu altura en cm");

///////////////////////////Pedir Funcion

const resultado = resultadoIMC(peso,altura);

///////////////////////////If
if(resultado < 16){
    estadoImc = "Criterio de ingreso";
}if (resultado > 16 && resultado < 16.9){
    estadoImc = "esta en infrapeso";
}else if (resultado > 17 && resultado <18.4){
    estadoImc = "esta en bajo peso";
}else if (resultado > 18.5 && resultado <24.9){
    estadoImc = "esta en peso normal";
}else if (resultado > 25 && resultado <29.9){
    estadoImc = "esta en sobrepeso";
}else if (resultado > 30 && resultado <34.9){
    estadoImc = "esta en obesidad premorbida";
}else if (resultado > 40 && resultado <45){
    estadoImc = "esta en obesidad morbida";
}else if (45<resultado){
    estadoImc = "esta en obesidad hipermorbida";
}

console.log("Su IMC es de ", resultado, estadoImc);


///////////////////////////Function
function resultadoIMC(peso,altura){
//    console.log(peso);
//    console.log(altura);
    peso=peso*0.453592;
//    console.log(peso);
    altura=altura/100;
//    console.log(altura);
    operacion = (peso/(altura*altura));
//    console.log(operacion);
    return operacion;
}