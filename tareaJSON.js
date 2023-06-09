// 1.- Creamos un arreglo para nuestras tareas, estas tareas tendran atributos como id, titulo, estatus completada o no completada

// Esto donde se ejecuta? Del lado del cliente
let tareas = [
    {

        id: 1,
        titulo: "Baniar al perro",
        estatus: true,
    },

    {
        id: 2,
        titulo: "Preparar la comida",
        estatus: false
    }

]

// Enviar ese arreglo al servidor

let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON)


//Ejemplo de carrito de compras

//Declaramos un arreglo de objeto vacio

let carritoDeCompras = [];

let producto = {
    id: 1,
    nombre: "Camisa de Pokemon",
    precio: 299.99,
    cantidad: 1,
};

//Mostrar información del carrito de compras

console.log("Tienes : ", carritoDeCompras.length, " producto(s) en el carrito"); //Undefinded


// Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto); //
console.log("Tienes : ", carritoDeCompras.length, " producto(s) en el carrito");

// Actualizar la cantidad de productos en el carrito

const productoId = 1;
const nuevaCantidad = 3;
producto.cantidad = nuevaCantidad;


let productoExiste = carritoDeCompras.find(producto => producto.id === productoId);
if (productoExiste) {
productoExiste.cantidad = nuevaCantidad;    
}

console.log("Tienes : ", carritoDeCompras.length, " producto(s) en el carrito");
console.log(producto);


/*
//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha

carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})

*/


//Eliminar un producto del carrito

let productoAEliminar = 1;
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){

    return producto.id === productoAEliminar;
});

if(indiceProductoAEliminar !== -1){
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}
console.log("Tienes : ", carritoDeCompras.length, " producto(s) en el carrito");


//Comprar productos (pagar carrito de compras)

/*


El metodo forEach es un metodo de array de JS, que nos va a ayudar a poder ejercutar una función en cada elemento de nuestro array.

Sintaxis de un forEach

array.forEach(function(elemento, indice, arreglo))


 */

let total = 0; 

//Oye JS, en mi carrito de compras, para cada producto que encuentres, ejecuta una funcion donde tomes un producto con parametros, y al encontrar lo vas a multiplicar el precio de ese producto por su cantidad. Ya que lo hayas echo, vas a tomar ese valor y lo vas a sumar y a reasignar a la variable total que declare alla arribita

//Agregar un nuevo producto para mi carrito de compras
carritoDeCompras.push(producto);

carritoDeCompras.forEach(function(producto){
    total += producto.precio * producto.cantidad;
})

//Reviso el total de mi carrito de compras

console.log("El total de su carrito de compras es de: ", total);