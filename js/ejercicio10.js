const montoARS = parseFloat(prompt("Ingrese el monto en Pesos Argentinos (ARS):"));
const monedaDestinoInput = prompt("Ingrese la moneda de destino (USD, EUR, BRL):");
const monedaDestino = monedaDestinoInput ? monedaDestinoInput.toUpperCase().trim() : "";
const mesesProyeccion = parseInt(prompt("Ingrese los meses de proyección de inflación (1 a 12):"));

if (isNaN(montoARS) || isNaN(mesesProyeccion) || montoARS <= 0 || mesesProyeccion < 1 || mesesProyeccion > 12) {
    console.log("Error: Verifique que el monto sea positivo y los meses estén entre 1 y 12.");
} else {
    let cotizacion = 0;

    switch (monedaDestino) {
        case "USD":
            cotizacion = 1300;
            break;
        case "EUR":
            cotizacion = 1420;
            break;
        case "BRL":
            cotizacion = 220;
            break;
        default:
            console.log("Error: Moneda de destino no contemplada.");
            break;
    }

    if (cotizacion > 0) {
        // Comisión por cambio del 2%
        const montoConComision = montoARS * 0.98;
        const montoDivisaRecibido = montoConComision / cotizacion;

        // Proyección por inflación acumulada simple del 4% mensual
        const montoProyectadoARS = montoARS * (1 + (0.04 * mesesProyeccion));

        console.log("=========================================");
        console.log("      SIMULADOR MONETARIO E INFLACIÓN    ");
        console.log("=========================================");
        console.log(`Monto ingresado:            $${montoARS.toFixed(2)} ARS`);
        console.log(`Moneda de cambio:           ${monedaDestino} (Cotización: 1 ${monedaDestino} = $${cotizacion} ARS)`);
        console.log(`Comisión aplicada (2%):     $${(montoARS * 0.02).toFixed(2)} ARS`);
        console.log("-----------------------------------------");
        console.log(`MONTO FINAL RECIBIDO:       ${montoDivisaRecibido.toFixed(2)} ${monedaDestino}`);
        console.log("-----------------------------------------");
        console.log(`PROYECCIÓN DE PÉRDIDA DE PODER ADQUISITIVO:`);
        console.log(`En ${mesesProyeccion} mes(es) al 4% de inflación mensual simple,`);
        console.log(`necesitará $${montoProyectadoARS.toFixed(2)} ARS para mantener el mismo poder de compra.`);
        console.log("=========================================");
    }
}