

class empleadosPlantilla {
    // 1.- Definir mis propiedades como variables, para posteriormente agregarle valores

    nombreEmpleado = "";
    edadEmpleado = "";
    rfcEmpleado = "";
    diasTrabajados = 0;
    sueldoBruto = 0;
    sueldoNeto = 0;

    isr = 0.31;



    // 3.- Definir una funcion constructora. Esta funcion es una función especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parametros de construcción y asi poder instanciar nuestro objeto.

    constructor(nombreEmpleado, edadEmpleado, rfcEmpleado, diasTrabajados,) {
        this.nombreEmpleado = nombreEmpleado;
        this.edadEmpleado = edadEmpleado;
        this.rfcEmpleado = rfcEmpleado;
        this.diasTrabajados = diasTrabajados;

    }


    // 2.- Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto

    imprimirInfo() {
        console.log("Nombre del empleado: ", this.nombreEmpleado);
        console.log("Edad del empleado: ", this.edadEmpleado, "anios");
        console.log("RFC del empleado: ", this.rfcEmpleado);
        console.log("Dias trabajados a la semana: ", this.diasTrabajados);
    }

    informacionDePago() {
        this.pagoMensualBruto();
        this.pagoMensualNeto();
        this.pagoQuincenalBruto();
        this.pagoQuincenalNeto();
    }

    pagoQuincenalBruto() {
        this.sueldoBruto = (this.diasTrabajados * 2) * 156.78;
        console.log("Tu salario quincenal Bruto es de ", this.sueldoBruto);
    }

    pagoQuincenalNeto() {
        this.sueldoBruto = (this.diasTrabajados * 2) * 156.78;
        this.sueldoNeto = this.sueldoBruto - (this.sueldoBruto * 0.31);
        console.log("Tu salario quincenal Bruto es de ", this.sueldoNeto);
    }

    pagoMensualBruto() {
        this.sueldoBruto = (this.diasTrabajados * 4) * 156.78;
        console.log("Tu salario Mensual Bruto es de ", this.sueldoBruto);
    }

    pagoMensualNeto() {
        this.sueldoBruto = (this.diasTrabajados * 4) * 156.78;
        this.sueldoNeto = this.sueldoBruto - (this.sueldoBruto * 0.31);
        console.log("Tu salario Mensual Bruto es de ", this.sueldoNeto);
    }
}

//Instanciar

function separador() {
    console.log("<--------Sig. Empleado-------->");
}

let empleado1 = new empleadosPlantilla("Eduardo", 36, "EDU91820I931",5);
let empleado2 = new empleadosPlantilla("Carlos", 28, "CAR289218237",6);
let empleado3 = new empleadosPlantilla("Daniel", 30, "DAN457126983",7);
let empleado4 = new empleadosPlantilla("Cecilia", 23, "CEC128371298",3);
let empleado5 = new empleadosPlantilla("Fernanda", 19, "FER123123123",6);



empleado1.imprimirInfo();
empleado1.informacionDePago();
separador();


empleado2.imprimirInfo();
empleado2.informacionDePago();
separador();


empleado3.imprimirInfo();
empleado3.informacionDePago();
separador();


empleado4.imprimirInfo();
empleado4.informacionDePago();
separador();


empleado5.imprimirInfo();
empleado5.informacionDePago();






/*
 
 
JSON (JavaScript Object Notation)
 
Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/



objeto = {
    nombre: "Felipe",
    edad: 15,
}
console.log(objeto);
