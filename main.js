class Pedido {
    constructor(tipo, tamano) {
        this.tipo = tipo;
        this.tamano = tamano;
    }

    toString() {
        console.log(`Tipo de Ilustración: ${this.tipo}\nTamaño (cm): ${this.tamano}`);
    }

    eleccion() {
        switch (tipo) {
            case "artesanal":
                console.log("El precio de la ilustración artesanal es $6000 y solo viene en tamaño A4");
                break;
            
            case "digital":
                if ((tamano == "A4" || tamano == "a4") || tamano == "20x30"){
                    console.log("El precio de la ilustración digital es $4000");
                    console.log("Por favor rellená el formulario y al confirmar el pedido recibirás un correo electrónico. Gracias!!");
                }
                else if (tamano == "30x40"){
                    console.log("El precio de la ilustración digital es $5000");
                    console.log("Por favor rellená el formulario y al confirmar el pedido recibirás un correo electrónico. Gracias!!");
                }
                else {
                    console.log("Refresque el navegador y vuelva a ingresar los datos");
                }
                break;
            
            default:
                console.log("Refresque el navegador y vuelva a ingresar los datos");
        }
    }
}

const tipo = prompt("Ingresá el tipo de ilustración que deseas (digital o artesanal):");
const tamano = prompt("¿Qué tamaño deseás (A4, 20x30 ó 30x40?):");
const pedido1 = new Pedido(tipo, tamano);

pedido1.toString();
pedido1.eleccion();
