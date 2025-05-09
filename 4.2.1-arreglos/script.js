import personas from "./persona.js"
import { personasMasculinas, personasMayores} from "./persona.js";
console.log(personas);
console.log(personasMasculinas);
console.log(personasMayores);

let personasCadenas = personas.map((valor) => {return `${valor.nombre} ${valor.primerApellido} ${valor.edad}`});
console.log(personasCadenas);

let vocales = ['a', 'e', 'i', 'o', 'u'];
let consonante = personas.filter((valor) => {
    return !vocales.includes(valor.nombre.toUpperCase().chartAt(0)) && valor.edad > 30;
});
console.log(consonante);

let indice = personas.findIndex((valor) => {
    return valor.primerApellido.charAt(0).toUpperCase() == 'P'
});
console.log(indice);