//Forma 1
function velocidad1(distancia, tiempo) {

    var distancia = 10;
    var tiempo = 5;
    var v = (distancia/tiempo);
    console.log("La velocidad es " + v + " m/s");
}

velocidad1();


//Forma 2

function velocidad2(distancia = 10, tiempo= 5,) {

   
    v = (distancia/tiempo);
    console.log("La velocidad es " +v + " m/s");
}

velocidad2();

//Forma 3

function velocidad3(distancia, tiempo,) {

   
    v = (distancia/tiempo);
    console.log("La velocidad es " +v + " m/s");
}

velocidad3(10, 5);

function formulaGeneral(a,b,c) {
    
    

    const raiz= Math.sqrt(((Math.pow(b,2))-(4*a*c)));

    const denominador=(2*a)
    
    const x1 = (-b + raiz )/(denominador);
    const x2 = (-b - raiz )/(denominador);

    console.log("x1 es igual a " +x1 +" y x2 es igual a " + x2);
    
}

formulaGeneral(2, 15, 1);
