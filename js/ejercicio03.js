const sueldoBruto = parseFloat(prompt("Ingrese el Sueldo Bruto del trabajador (ARS):"));

if (isNaN(sueldoBruto) || sueldoBruto <= 0) {
    console.log("Error: Ingrese un sueldo bruto válido mayor a 0.");
} else {

    const jubilacion = sueldoBruto * 0.11;
    const obraSocial = sueldoBruto * 0.03;
    const ley19032 = sueldoBruto * 0.03;
    const totalRetencionesFijas = jubilacion + obraSocial + ley19032;

    const sueldoNetoProvisorio = sueldoBruto - totalRetencionesFijas;

    let retencionGanancias = 0;

    if (sueldoNetoProvisorio > 2000000) {
        const excedente = sueldoNetoProvisorio - 2000000;
        retencionGanancias = 120000 + (excedente * 0.25);
    } else if (sueldoNetoProvisorio > 1200000) {
        const excedente = sueldoNetoProvisorio - 1200000;
        retencionGanancias = excedente * 0.15;
    }

    const sueldoNetoFinal = sueldoNetoProvisorio - retencionGanancias;

    console.log("=========================================");
    console.log("       RECIBO DE LIQUIDACIÓN SALARIAL    ");
    console.log("=========================================");
    console.log(`Sueldo Bruto:                 $${sueldoBruto.toFixed(2)}`);
    console.log("-----------------------------------------");
    console.log("Descuentos de Ley:");
    console.log(`- Jubilación (11%):           $${jubilacion.toFixed(2)}`);
    console.log(`- Obra Social (3%):           $${obraSocial.toFixed(2)}`);
    console.log(`- Ley 19.032 (3%):            $${ley19032.toFixed(2)}`);
    console.log(`Subtotal Retenciones Fijas:   $${totalRetencionesFijas.toFixed(2)}`);
    console.log("-----------------------------------------");
    console.log(`Sueldo Neto Provisorio:       $${sueldoNetoProvisorio.toFixed(2)}`);
    console.log(`Retención Imp. Ganancias:     $${retencionGanancias.toFixed(2)}`);
    console.log("=========================================");
    console.log(`SUELDO NETO FINAL A COBRAR:   $${sueldoNetoFinal.toFixed(2)}`);
    console.log("=========================================");
}
