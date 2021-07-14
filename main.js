class Producto {
    constructor(tipo, tamano, precio) {
        this.tipo = tipo;
        this.tamano = tamano;
        this.precio = precio;
    }

    toString() {
        console.log(`Tipo de Ilustración: ${this.tipo}\nTamaño (cm): ${this.tamano}\nPrecio: $${this.precio}`);
    }
}

class Tienda {
    constructor(nombre){
        this.nombre = nombre;
        this.productos = [];
    }
    agregarProductos(producto){
        this.productos.push(producto);
    }
}

let precio = 0;
let tiendaOnLine = new Tienda("Tienda online");
let opcion = prompt("Ingresá 1, si deseas iniciar/continuar tu pedido o, Enter para salir");

while (opcion == "1") {
    const tipo = prompt("Ingresá el tipo de ilustración que deseas (digital o artesanal):");
    const tamano = prompt("¿Qué tamaño deseás (A4, 20x30 ó 30x40?):");

    switch (tipo) {
            case "artesanal":
                if (tamano == "A4" || tamano == "a4") {
                    precio = 6000;
                }
                else {
                    precio = 0;
                }
                break;
            
            case "digital":
                if ((tamano == "A4" || tamano == "a4") || tamano == "20x30") {
                    precio = 4000;
                }
                else if (tamano == "30x40") {
                    precio = 5000;
                }
                else {
                    console.log("Refresque el navegador y vuelva a ingresar los datos");
                }
                break;
            
            default:
                console.log("Refresque el navegador y vuelva a ingresar los datos");
        }

    let pedido1 = new Producto(tipo, tamano, precio);
    
    pedido1.toString();
    tiendaOnLine.agregarProductos(pedido1);

    opcion = prompt("Ingresá 1, si deseas iniciar/continuar tu pedido o, Enter para salir");
}

console.log(tiendaOnLine);

let totalPedido = tiendaOnLine.reduce((acumulador, tiendaOnLine[precio]) => acumulador + tiendaOnLine[precio], 0);
    
console.log("El total de tu compra es " + totalPedido);


