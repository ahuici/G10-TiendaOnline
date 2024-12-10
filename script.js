
document.getElementById("agregarProducto").addEventListener("click",agregarProducto)

function agregarProducto() {

    let nombre = window.prompt("Dime el nombre del producto");
    // let imagen = window.prompt("Imagen");
    let precio = window.prompt("Dime el precio del producto");

    let pNombre = document.createElement("p");
    // let aImagen = document.createElement("a");
    let pPrecio = document.createElement("p");

    let tNombre = document.createTextNode(nombre);
    // let aImagen.createTextNode(imagen);
    let tPrecio = document.createTextNode(precio);

    pNombre.appendChild(tNombre);
    // aImagen.appendChild(aImagen);
    pPrecio.appendChild(tPrecio);

    let div = document.createElement("div");
    div.setAttribute("class","producto");
    div.appendChild(tNombre);
    // div.appendChild(aImagen);
    div.appendChild(tPrecio);

    document.getElementById("catalogo").appendChild(div);
}