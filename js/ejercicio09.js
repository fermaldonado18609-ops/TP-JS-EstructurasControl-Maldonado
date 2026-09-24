const dificultadInput = prompt("¿Presenta dificultad para respirar? (si / no):");
const tieneDificultad = dificultadInput ? dificultadInput.toLowerCase().trim() : "";
const nivelDolor = parseInt(prompt("Ingrese el nivel de dolor (1 al 10):"));
const presionSistolica = parseInt(prompt("Ingrese la presión arterial sistólica (mm Hg):"));

if (isNaN(nivelDolor) || isNaN(presionSistolica) || nivelDolor < 1 || nivelDolor > 10 || presionSistolica <= 0) {
    alert("Error: Por favor, ingrese valores válidos en el formulario de guardia.");
} else {
    let triaje = "";
    let tiempoEspera = "";

    // Nivel Rojo: Atención Inmediata
    if (tieneDificultad === "si" || presionSistolica > 180) {
        triaje = "ROJO (Atención Inmediata)";
        tiempoEspera = "0 minutos (Atención directa en shock room)";
    }
    // Nivel Amarillo: Urgencia Media
    else if (nivelDolor >= 7 || (presionSistolica >= 140 && presionSistolica <= 180)) {
        triaje = "AMARILLO (Urgencia Media)";
        tiempoEspera = "Máximo 30 minutos";
    }
    // Nivel Verde: Consulta Baja Prioridad
    else {
        triaje = "VERDE (Consulta Baja Prioridad)";
        tiempoEspera = "Hasta 120 minutos (Sujeto a demanda)";
    }

    alert(`TRIAJE DE GUARDIA MÉDICA\n--------------------------------\nCategoría: ${triaje}\nTiempo máximo estimado: ${tiempoEspera}`);
}