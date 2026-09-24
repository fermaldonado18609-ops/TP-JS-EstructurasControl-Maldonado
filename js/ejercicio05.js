const ingresosAnuales = parseFloat(prompt("Ingrese los ingresos brutos anuales (ARS):"));
const superficie = parseFloat(prompt("Ingrese la superficie afectada (m²):"));

if (isNaN(ingresosAnuales) || isNaN(superficie) || ingresosAnuales < 0 || superficie < 0) {
    alert("Error: Por favor, ingrese montos y superficies válidos.");
} else {
    let categoria = "";

    if (ingresosAnuales <= 6000000 && superficie <= 30) {
        categoria = "Categoría A";
    } else if (ingresosAnuales <= 12000000 && superficie <= 45) {
        categoria = "Categoría B";
    } else if (ingresosAnuales <= 18000000 && superficie <= 85) {
        categoria = "Categoría C";
    } else {
        categoria = "Régimen General (Supera parámetros límites del Monotributo)";
    }

    alert(`Evaluación Tributaria:\nCategoría asignada: ${categoria}`);
}