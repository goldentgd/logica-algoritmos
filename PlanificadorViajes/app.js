import { registrarDestino, mostrarItinerario } from './script.js';

function iniciarApp() {
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("New York", "2024-08-10", "Avión");
    registrarDestino("Corea", "2025-12-02", "Camión");
    mostrarItinerario();
}

iniciarApp();