document.getElementById("añadirCarrito").addEventListener("click",obtenerDatos)

function obtenerDatos() {

    let nombre = window.prompt("Dime el nombre del producto");
    let imagen;
    let imagenURL;

    let input = document.createElement("input");
    input.type = "file";
    input.setAttribute("accept", "image/*");
    input.onchange = function (event) {
        imagen = event.target.files[0];
        imagenURL = URL.createObjectURL(imagen);
    };
    input.click();

    let precio = window.prompt("Dime el precio del producto");

    insertarDatos(nombre,imagenURL,precio);
}

function insertarDatos(nombre, imagen, precio){
    let div = document.createElement("div");
    div.setAttribute("class","producto");

    let elementoNombre = document.createElement("p");
    let elementoImagen = document.createElement("img");
    let elementoPrecio = document.createElement("p");

    let txtNombre = document.createTextNode(nombre);
    elementoImagen.setAttribute("src",imagen);
    let txtPrecio = document.createTextNode(`${parseFloat(precio)}€`);

    elementoNombre.appendChild(txtNombre);
    elementoPrecio.appendChild(txtPrecio);

    div.appendChild(elementoNombre);
    div.appendChild(elementoImagen);
    div.appendChild(elementoPrecio);

    document.getElementById("catalogo").appendChild(div);
}