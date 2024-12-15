let precioTotal = 0;
let cantMotorola = 0;
let cantIphone = 0;
let cantGalaxy = 0;
let cantPixel = 0;
let cantXP3 = 0;

//PRODUCTO 1 MOTOROLA AÑADIR Y ELIMINAR
document.getElementById("btnProducto1").addEventListener("click",function(){
    cantMotorola++;
    if (cantMotorola == 1){
        let listaCarrito = document.getElementById("listaCarrito");
        let li = document.createElement("li");
        li.setAttribute("id","liMotorola");
        let txtLI = document.createTextNode("Motorola Moto G4 X" + cantMotorola);
        li.appendChild(txtLI);
        listaCarrito.appendChild(li);
    }
    else{
        document.getElementById("liMotorola").textContent = `Motorola Moto G4     X${cantMotorola}`;
    }
    

    precioTotal += 170.99;

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
})

document.getElementById("btnProductoEliminar1").addEventListener("click",function(){
    if (cantMotorola == 0) window.alert("A ver pedazo cabezabuque, como vas a eliminar algo que no has agregado");
    else{
        cantMotorola--;
        if (cantMotorola == 0){
            let listaCarrito = document.getElementById("listaCarrito");
            let hijos = listaCarrito.childNodes;
            hijos.forEach(element => {
                if (element.id == "liMotorola") listaCarrito.removeChild(element);
            });
        }
        else document.getElementById("liMotorola").textContent = `Motorola Moto G4     X${cantMotorola}`;

        precioTotal -= 170.99;

        let pPrecio = document.getElementById("pPrecio");
        pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
    }
})


//PRODUCTO 2 IPHONE AÑADIR Y ELIMINAR
document.getElementById("btnProducto2").addEventListener("click",function(){
    cantIphone++;
    if (cantIphone == 1){
        let listaCarrito = document.getElementById("listaCarrito");
        let li = document.createElement("li");
        li.setAttribute("id","liIphone");
        let txtLI = document.createTextNode("Iphone 16 Pro X" + cantIphone);
        li.appendChild(txtLI);
        listaCarrito.appendChild(li);
    }
    else{
        document.getElementById("liIphone").textContent = `Iphone 16 Pro     X${cantIphone}`;
    }
    

    precioTotal += 999.99;

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
})

document.getElementById("btnProductoEliminar2").addEventListener("click",function(){
    if (cantIphone == 0) window.alert("A ver pedazo cabezabuque, como vas a eliminar algo que no has agregado");
    else{
        cantIphone--;
        if (cantIphone == 0){
            let listaCarrito = document.getElementById("listaCarrito");
            let hijos = listaCarrito.childNodes;
            hijos.forEach(element => {
                if (element.id == "liIphone") listaCarrito.removeChild(element);
            });
        }
        else document.getElementById("liIphone").textContent = `Iphone 16 Pro     X${cantIphone}`;

        precioTotal -= 999.99;

        let pPrecio = document.getElementById("pPrecio");
        pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
    }
})



//PRODUCTO 3 GALAXY AÑADIR Y ELIMINAR
document.getElementById("btnProducto3").addEventListener("click",function(){
    cantGalaxy++;
    if (cantGalaxy == 1){
        let listaCarrito = document.getElementById("listaCarrito");
        let li = document.createElement("li");
        li.setAttribute("id","liGalaxy");
        let txtLI = document.createTextNode("Samsung Galaxy Z Flip X" + cantGalaxy);
        li.appendChild(txtLI);
        listaCarrito.appendChild(li);
    }
    else{
        document.getElementById("liGalaxy").textContent = `Samsung Galaxy Z Flip     X${cantGalaxy}`;
    }
    

    precioTotal += 1099.99;

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
})

document.getElementById("btnProductoEliminar3").addEventListener("click",function(){
    if (cantGalaxy == 0) window.alert("A ver pedazo cabezabuque, como vas a eliminar algo que no has agregado");
    else{
        cantGalaxy--;
        if (cantGalaxy == 0){
            let listaCarrito = document.getElementById("listaCarrito");
            let hijos = listaCarrito.childNodes;
            hijos.forEach(element => {
                if (element.id == "liGalaxy") listaCarrito.removeChild(element);
            });
        }
        else document.getElementById("liGalaxy").textContent = `Samsung Galaxy Z Flip     X${cantGalaxy}`;

        precioTotal -= 1099.99;

        let pPrecio = document.getElementById("pPrecio");
        pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
    }
})

//PRODUCTO 4 PIXEL AÑADIR Y ELIMINAR
document.getElementById("btnProducto4").addEventListener("click",function(){
    cantPixel++;
    if (cantPixel == 1){
        let listaCarrito = document.getElementById("listaCarrito");
        let li = document.createElement("li");
        li.setAttribute("id","liPixel");
        let txtLI = document.createTextNode("Google Pixel 8a X" + cantPixel);
        li.appendChild(txtLI);
        listaCarrito.appendChild(li);
    }
    else{
        document.getElementById("liPixel").textContent = `Google Pixel 8a     X${cantPixel}`;
    }
    

    precioTotal += 499.99;

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
})

document.getElementById("btnProductoEliminar4").addEventListener("click",function(){
    if (cantPixel == 0) window.alert("A ver pedazo cabezabuque, como vas a eliminar algo que no has agregado");
    else{
        cantPixel--;
        if (cantPixel == 0){
            let listaCarrito = document.getElementById("listaCarrito");
            let hijos = listaCarrito.childNodes;
            hijos.forEach(element => {
                if (element.id == "liPixel") listaCarrito.removeChild(element);
            });
        }
        else document.getElementById("liPixel").textContent = `Google Pixel 8a     X${cantPixel}`;

        precioTotal -= 499.99;

        let pPrecio = document.getElementById("pPrecio");
        pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
    }
})

//PRODUCTO 5 XP3 AÑADIR Y ELIMINAR
document.getElementById("btnProducto5").addEventListener("click",function(){
    cantXP3++;
    if (cantXP3 == 1){
        let listaCarrito = document.getElementById("listaCarrito");
        let li = document.createElement("li");
        li.setAttribute("id","liXP3");
        let txtLI = document.createTextNode("Sonim XP3plus X" + cantXP3);
        li.appendChild(txtLI);
        listaCarrito.appendChild(li);
    }
    else{
        document.getElementById("liXP3").textContent = `Sonim XP3plus     X${cantXP3}`;
    }
    

    precioTotal += 210.00;

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
})

document.getElementById("btnProductoEliminar5").addEventListener("click",function(){
    if (cantXP3 == 0) window.alert("A ver pedazo cabezabuque, como vas a eliminar algo que no has agregado");
    else{
        cantXP3--;
        if (cantXP3 == 0){
            let listaCarrito = document.getElementById("listaCarrito");
            let hijos = listaCarrito.childNodes;
            hijos.forEach(element => {
                if (element.id == "liXP3") listaCarrito.removeChild(element);
            });
        }
        else document.getElementById("liXP3").textContent = `Sonim XP3plus     X${cantXP3}`;

        precioTotal -= 210.00;

        let pPrecio = document.getElementById("pPrecio");
        pPrecio.textContent = `Precio total: ${Math.round(precioTotal * 100) / 100}€`;
    }
})



//BOTON PAGAR
document.getElementById("btnPagar").addEventListener("click",function(){
    window.alert("HAS PAGADO " + (Math.round(precioTotal * 100) / 100) + "€");

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: 0€`;
    precioTotal = 0;
    cantMotorola = 0;
    cantIphone = 0;
    cantGalaxy = 0;
    cantPixel = 0;
    cantXP3 = 0;

    let listaCarrito = document.getElementById("listaCarrito");
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }
})