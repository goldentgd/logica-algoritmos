//const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];
const invitados = ["Ana", "Bruno", "Carlos", "Daniel", "Esteban", "Fernando"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        //TODO: Compara las iniciales de los nombres en los punteros
        const inicialInicio = arr[inicio][0].toUpperCase();
        const inicialSiguiente = arr[siguiente][0].toUpperCase();
        if (inicialInicio === inicialSiguiente){
            // Si los nombres son iguales, devuelve el par
            return [arr[inicio], arr[siguiente]];
        }
        // TODO: Avanza los punteros si no coinciden
        inicio++;
        siguiente++;
    }

    return 'Nadie se va a sentar juntos, todos se sentarán solos'; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]