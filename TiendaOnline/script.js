const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];
let precio = productos.filter((valor) => {
    return valor.precio < 100;
});
let ordenAlfa = productos.sort((a,b) =>{
    return a.nombre.localeCompare(b.nombre);
});
let nombre = productos.map((valor) =>{
    return valor.nombre;
})
//reduce, 
let totalCompra = productos.reduce((acumulador, valor) => {
    return acumulador + valor.precio;
}, 0);
// some
let categoriaElec = productos.some((valor)=>{
    return valor.categoria  === "Electrónica";
})
// every
let productosCaros = productos.every((valor) =>{
    return valor.precio > 100;
})
// includes
let remplazo = nombre
if (remplazo.includes("Camiseta")){
    remplazo = remplazo.map(valor => valor === "Camiseta" ? "Playera" : valor);
}
if (remplazo.includes("Celular")){
    remplazo = remplazo.map(valor => valor === "Celular" ? "Iphone" : valor);
}
if (remplazo.includes("Laptop")){
    remplazo = remplazo.map(valor => valor === "Laptop" ? "MacBook" : valor);
}

export {precio, ordenAlfa, nombre, totalCompra, categoriaElec, productosCaros, remplazo};