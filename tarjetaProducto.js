// 1.- Obtener los elementos del html para guardarlos en variables 


//Almaceno el lugar de destino de mi tarjetita en una constante
const container = document.getElementById("product-container");
const botonAgregarProducto = document.getElementById("agregarProducto");

//Almaceno elementos del formulario en variables JS


// Guardo los valores de mis productos
let nombreProducto = document.getElementById("nombreProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let imagenProducto = document.getElementById("imagenProducto");

console.log(nombreProducto);
console.log(nombreProducto);


//Quiero que cada tarjeta tenga su propio div o contenedor
function agregarProductos() {
    //Guardar los valores de mis Inputs
    var valorInputProducto = nombreProducto.value;
    var valorInputDescripcion = descripcionProducto.value;
    var valorInputImagen = imagenProducto.value;

    console.log(valorInputProducto);
    console.log(valorInputProducto);

    console.log(valorInputDescripcion);
    console.log(valorInputDescripcion);

    const productCard = document.createElement("div");

    // 1.- Creo el elemento
    productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito\n </button>
`;

    //Agregar esa tarjeta de producto al container especificado

    container.appendChild(productCard);
}
//Creamos el evento 
botonAgregarProducto.addEventListener("click", agregarProductos);

