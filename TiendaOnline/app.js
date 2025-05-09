import { categoriaElec, nombre, ordenAlfa, precio, productosCaros, remplazo, totalCompra,} from "./script.js";

function iniciarApp() {
    console.log("Bienvenido a la tienda online");
    console.log('Precios menores a 100 pesitos:');
    console.log(precio);
    console.log('El orden de la lista es:');
    console.log(ordenAlfa);
    console.log('Los nombres de los productos son:');
    console.log(nombre);
    console.log(`Total de la compra: ${totalCompra}`);
    if (categoriaElec){
        console.log("Hay productos de la categoría Electrónica");
    }else{
        console.log("No hay productos de la categoría Electrónica");
    }
    if (productosCaros){
        console.log("Tienes productos caros en tu lista");
    }else{
        console.log("¡Qué ofertas te agarraste!");
    }
    console.log(remplazo);
}

iniciarApp();