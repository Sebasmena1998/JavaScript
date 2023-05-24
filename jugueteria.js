console.log("<-----Ejercicio 2------>");
/*
//numero de items
nPayasos = 27;
nMunnecas = 14;

//Peso de los items (gr)

pesoPayaso =112;
pesoMunneca = 75;


pesoDelPaquete =null;

pesoTotalPayaso = nPayasos*pesoPayaso;
pesoTotalMunneca = nMunnecas*pesoMunneca;

//obtener le peso total del paquete
pesoDelPaquete = pesoTotalMunneca+pesoTotalPayaso;

console.log("El peso total del paquete es:")
console.log(pesoDelPaquete, 'gr');
*/

nPayasos = prompt("Escriba el numero de payasos");
nMunnecas = prompt("Escriba el numero de Muñecas");

function pesoTotal() {

    pesoPayaso= nPayasos*112;

    pesoMuñeca= nMunnecas*75;

pesosuma= pesoMuñeca+pesoPayaso;
console.log("El peso total del paquete es de " + pesosuma + " gr.");

}

pesoTotal();
