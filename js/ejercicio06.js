const ingresoMensual = parseFloat(prompt("Ingrese su ingreso mensual neto (ARS):"));
const antiguedad = parseFloat(prompt("Ingrese su antigüedad laboral en años:"));
const deudasInput = prompt("¿Posee deudas pendientes? (si / no):");
const tieneDeudas = deudasInput ? deudasInput.toLowerCase().trim() : "";
const montoSolicitado = parseFloat(prompt("Ingrese el monto del crédito solicitado (ARS):"));

if (isNaN(ingresoMensual) || isNaN(antiguedad) || isNaN(montoSolicitado) || ingresoMensual <= 0 || montoSolicitado <= 0) {
    alert("Error: Verifique los datos numéricos ingresados.");
} else {
    let aprobado = true;
    let motivoRechazo = "";

    if (tieneDeudas === "si") {
        aprobado = false;
        motivoRechazo = "Posee deudas pendientes registradas.";
    }
    
    else if (antiguedad < 1) {
        aprobado = false;
        motivoRechazo = "La antigüedad laboral es menor al mínimo requerido (1 año).";
    } 
   
    else {
        const montoConInteres = montoSolicitado * 1.30;
        const cuotaMensual = montoConInteres / 12;
        const limiteCuota = ingresoMensual * 0.30;

        if (cuotaMensual > limiteCuota) {
            aprobado = false;
            motivoRechazo = `La cuota estimada ($${cuotaMensual.toFixed(2)}) supera el 30% del ingreso mensual ($${limiteCuota.toFixed(2)}).`;
        }
    }

    if (aprobado) {
        alert("¡Solicitud PRE-APROBADA! Cumple con todas las condiciones del scoring crediticio.");
    } else {
        alert(`Solicitud RECHAZADA.\nMotivo: ${motivoRechazo}`);
    }
}
