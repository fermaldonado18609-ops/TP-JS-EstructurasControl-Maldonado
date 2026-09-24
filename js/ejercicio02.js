const edad = parseInt(prompt("Ingrese la edad del conductor:"));
const tipoCoberturaInput = prompt("Ingrese tipo de cobertura (terceros, terceros_completo, todo_riesgo):");
const tipoCobertura = tipoCoberturaInput ? tipoCoberturaInput.toLowerCase().trim() : "";
const accidentes = parseInt(prompt("Ingrese la cantidad de accidentes en el último año:"));

if (isNaN(edad) || isNaN(accidentes) || edad <= 0 || accidentes < 0) {
    alert("Entrada inválida. Verifique los datos numéricos ingresados.");
} else if (accidentes >= 3 && tipoCobertura === "todo_riesgo") {
    alert("Contratación rechazada: La opción 'todo_riesgo' no está disponible para conductores con 3 o más accidentes.");
} else {
    let tarifaBase = 0;

    switch (tipoCobertura) {
        case "terceros":
            tarifaBase = 45000;
            break;
        case "terceros_completo":
            tarifaBase = 70000;
            break;
        case "todo_riesgo":
            tarifaBase = 110000;
            break;
        default:
            alert("Tipo de cobertura no válido.");
            break;
    }

    if (tarifaBase > 0) {
        let recargosYDescuentos = 0;

        if (edad < 25) {
            recargosYDescuentos += 0.20; // 20% recargo por edad
        }
        if (accidentes === 0) {
            recargosYDescuentos -= 0.10; // 10% bonificación
        }
        if (accidentes >= 3) {
            recargosYDescuentos += 0.30; // 30% recargo por siniestralidad
        }

        const tarifaFinal = tarifaBase * (1 + recargosYDescuentos);
        alert(`Cotización exitosa.\nValor final de la póliza: $${tarifaFinal.toLocaleString('es-AR')} ARS`);
    }
}