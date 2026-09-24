const distanciaKm = parseFloat(prompt("Ingrese la distancia del viaje (en km):"));
const tiempoMinutos = parseFloat(prompt("Ingrese el tiempo estimado (en minutos):"));
const demandaInput = prompt("Ingrese el nivel de demanda (baja, media, alta):");
const demanda = demandaInput ? demandaInput.toLowerCase().trim() : "";

if (isNaN(distanciaKm) || isNaN(tiempoMinutos) || distanciaKm <= 0 || tiempoMinutos <= 0) {
    alert("Error: Ingrese valores numéricos válidos para distancia y tiempo.");
} else {
    const bajadaBandera = 800;
    const costoKm = 350;
    const costoMinuto = 80;

    let multiplicadorDemanda = 0;

    switch (demanda) {
        case "baja":
            multiplicadorDemanda = 1.0;
            break;
        case "media":
            multiplicadorDemanda = 1.3;
            break;
        case "alta":
            multiplicadorDemanda = 1.8;
            break;
        default:
            alert("Nivel de demanda no válido.");
            break;
    }

    if (multiplicadorDemanda > 0) {
        const subtotalBase = bajadaBandera + (distanciaKm * costoKm) + (tiempoMinutos * costoMinuto);
        let costoTotal = subtotalBase * multiplicadorDemanda;

        if (distanciaKm > 20) {
            costoTotal += 1500; // Recargo fijo de peaje
        }

        alert(`Tarifa Estimada del Viaje: $${costoTotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })} ARS`);
    }
}