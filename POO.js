/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

//Arrgleo (Objeto)
var casaArreglo = [3, 2, 1, 4, 2, "Verde", 6, "Rojo"];



// Creación de un objeto casa (atributos)
const casa={numHabitaciones :3, numPisos :2, numBanios :1, color: "Rojo",};


// Para imprimir la información de un objeto, utilizo la referencia al objeto, despues un punto y por ultimo el nombre de la propiedad o metodo que quieres mostrar.

console.log("El color de mi casa es: ", casa.color);

// Instrucción: Crear 50 casas, con la misma estructura pero colores diferentes


//Clase para generar una plantilla, esta plantilla va a tenerpredefinida las llaves (keys) de nuestra propiedad, y cada que instancie o cree un objeto, esa información se va ir personalizando.



class casaPlantilla{

    // 1.- Definir mis propiedades como variables, para posteriormente agregarle valores
    
    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";

    // 3.- Definir una funcion constructora. Esta funcion es una función especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables, para usarlas como parametros de construcción y asi poder instanciar nuestro objeto.

    // Los parametros se pasan en el orden en el que fueron declarados

    constructor(numHabitaciones, numBanios, numPisos, color){

        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;


    }


    // 2.- Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto

    encenderLuces(){
        console.log("Click, luces encendidas");

    }

    abrirVentanas(){
        console.log("Swiiiift, Ventanas abiertas ");
        
    }

    guardarmeDelFresnito(){
        console.log("Que agusticidad");

    }
    

}


//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)

/*Instanciar objetos

Para instanciar objects, usamos la siguiente sintaxis:

variable con nombre = palabrasReservada referenciaDeLaClase (parametros de construccion);


*/
//Tengo una variable llamada "casa de Felipe", que es un nuevo objeto de la clase casaPlantilla y que tiene los siguientes parametros
const casaDeFelipe = new casaPlantilla (6, 3, 3, "Azul");

console.log(casaDeFelipe);
casaDeFelipe.encenderLuces();
casaDeFelipe.guardarmeDelFresnito();
console.log(casaDeFelipe.numHabitaciones);


//Ejemplo de POO con Gatitos

console.log("..............Ejercicio Diferente.............");

class gatitos {

    //1.- Propiedades
    nombre = "";
    edad = 0;
    tamanio = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;


     //3.- Constructor
     constructor (nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas) {
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
     }



    //2.- Metoodos
    imprimirInfo(){
        console.log("El nombre de mi gato es: " , this.nombre);
        console.log("La edad de mi gato es: " , this.edad, "anios");
        console.log("El tamanio de mi gato es: " , this.tamanio);
        console.log("El numero de vidas de mi gato es: " , this.numeroVidas);
        console.log("La raza de mi gato es: " , this.raza);
    };



    maullar(){
        console.log("Miauuu");
    };

    rasguniar(){
        console.log("El gato ha rasguniado el sillon");
    };

    ronronear(){
        console.log("Rrrrrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }
}


//Instanciar
let juanchoDelCampo = new gatitos ("Juancho Del Campo", 5, "Grande", "Tranquilo", 7, "naranja", "angora", true);
let nenito = new gatitos ("Nenito", 3, "Mediano", "Travieso", 2, "Blanco con naranja", "desconocida", true);
let donGato = new gatitos ("Don Gato", 7, "Mediano", "Embustero", 4, "Amarillo con Traje Morado", "desconocida", false);

juanchoDelCampo.imprimirInfo();
juanchoDelCampo.cuidarGato();
nenito.imprimirInfo();
nenito.cuidarGato();
donGato.imprimirInfo();
donGato.cuidarGato();



// <----------------------------------------------------------------------->

/*

JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombre);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);


//Para deserealizar un objeto JSON vamos a utilizar un metodo llamado JSON.parse(Objeto que queremos deserealizar)

let objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado)
