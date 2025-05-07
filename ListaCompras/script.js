let listaDeCompras = [];
const agregarProducto = (producto) =>{
    let nuevoProducto = {
        nombre: producto
    };
    if((listaDeCompras.find(p => p.nombre === nuevoProducto.nombre))){
        console.log("El producto ya existe en la lista");
    }
    listaDeCompras.push(nuevoProducto);

}
const eliminarProducto = (producto) =>{
    let indice = listaDeCompras.findIndex((p) => p.nombre === producto);
    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log("Producto eliminado: " + producto);
    } else {
        console.log("Producto no encontrado: " + producto);
    }
}
const mostrarLista = () =>{
    for (let i = 0; i < listaDeCompras.length; i++) {
        let producto = listaDeCompras[i];
        console.log("Producto: " + producto.nombre);
        console.log("---------------------------");
    }
}
export{agregarProducto, eliminarProducto,mostrarLista};