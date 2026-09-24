const SALDO_INICIAL = 250000;
let saldoActual = SALDO_INICIAL;

const opcion = prompt(
    "--- CAJERO AUTOMÁTICO ---\n" +
    "1: Consultar Saldo\n" +
    "2: Extraer Dinero\n" +
    "3: Depositar Dinero\n" +
    "4: Salir\n\n" +
    "Ingrese el número de la opción deseada:"
);

switch (opcion) {
    case "1":
        alert(`Su saldo actual es: $${saldoActual.toLocaleString('es-AR')} ARS`);
        break;

    case "2":
        const extraccion = parseFloat(prompt("Ingrese la cantidad a extraer (múltiplos de $1.000):"));
        if (isNaN(extraccion) || extraccion <= 0) {
            alert("Error: Monto ingresado no válido.");
        } else if (extraccion % 1000 !== 0) {
            alert("Error: El cajero solo entrega billetes múltiplos de $1.000 ARS.");
        } else if (extraccion > saldoActual) {
            alert("Error: FONDOS INSUFICIENTES para realizar la operación.");
        } else {
            saldoActual -= extraccion;
            alert(`Extracción exitosa.\nRetire su dinero.\nNuevo saldo disponible: $${saldoActual.toLocaleString('es-AR')} ARS`);
        }
        break;

    case "3":
        const deposito = parseFloat(prompt("Ingrese el monto a depositar:"));
        if (isNaN(deposito) || deposito <= 0) {
            alert("Error: Monto de depósito no válido.");
        } else {
            saldoActual += deposito;
            alert(`Depósito acreditado correctamente.\nNuevo saldo: $${saldoActual.toLocaleString('es-AR')} ARS`);
        }
        break;

    case "4":
        alert("Gracias por utilizar nuestros servicios bancarios. ¡Hasta luego!");
        break;

    default:
        alert("Opción no válida. Por favor, seleccione una opción del 1 al 4.");
        break;
}