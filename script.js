let precioTotal = 0;
let cantMotorola = 0;
let cantIphone = 0;
let cantGalaxy = 0;
let cantPixel = 0;
let cantXP3 = 0;

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
        document.getElementById("liMotorola").textContent = `Motorola Moto G4     x${cantMotorola}`;
    }
    

    precioTotal += 170.99;

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: ${precioTotal}€`;
})

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
    pPrecio.textContent = `Precio total: ${precioTotal}€`;
})

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
    pPrecio.textContent = `Precio total: ${precioTotal}€`;
})

document.getElementById("btnProducto4").addEventListener("click",function(){
    cantPixel++;
    if (cantPixel == 1){
        let listaCarrito = document.getElementById("listaCarrito");
        let li = document.createElement("li");
        li.setAttribute("id","liPixel");
        let txtLI = document.createTextNode("Google Pixel 8a< X" + cantPixel);
        li.appendChild(txtLI);
        listaCarrito.appendChild(li);
    }
    else{
        document.getElementById("liPixel").textContent = `Google Pixel 8a     X${cantPixel}`;
    }
    

    precioTotal += 499.99;

    let pPrecio = document.getElementById("pPrecio");
    pPrecio.textContent = `Precio total: ${precioTotal}€`;
})

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
    pPrecio.textContent = `Precio total: ${precioTotal}€`;
})