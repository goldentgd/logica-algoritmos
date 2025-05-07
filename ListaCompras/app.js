import { agregarProducto, eliminarProducto, mostrarLista } from './script.js';

function iniciarApp() {
    agregarProducto("Aretes");
    agregarProducto("Pulsera de plata");
    agregarProducto("Collar de corazón");
    agregarProducto("Anillo de diamante 10k");
    mostrarLista();
    agregarProducto("Aretes");
    eliminarProducto("Collar de corazón");
    eliminarProducto("jugo");
    mostrarLista();
    
}

iniciarApp();