const montoCarrito = parseFloat(prompt("Ingrese el monto total del carrito (ARS):"));
const categoriaUsuarioInput = prompt("Ingrese la categoría del usuario (Bronce, Plata, Oro):");
const categoriaUsuario = categoriaUsuarioInput ? categoriaUsuarioInput.toLowerCase().trim() : "";
const cuponInput = prompt("Ingrese el código de descuento (DESC10, SUPER20) o deje en blanco:");
const cupon = cuponInput ? cuponInput.toUpperCase().trim() : "";

if (isNaN(montoCarrito) || montoCarrito <= 0) {
    console.log("Error: Ingrese un monto de carrito válido.");
} else {
    let porcentajeMembresia = 0;
    if (categoriaUsuario === "plata") porcentajeMembresia = 0.05;
    if (categoriaUsuario === "oro") porcentajeMembresia = 0.15;

    let porcentajeCupon = 0;
    switch (cupon) {
        case "DESC10":
            porcentajeCupon = 0.10;
            break;
        case "SUPER20":
            if (montoCarrito > 50000) {
                porcentajeCupon = 0.20;
            } else {
                console.log("El cupón SUPER20 requiere una compra superior a $50.000 ARS.");
            }
            break;
        default:
            porcentajeCupon = 0;
            break;
    }

    const descuentoMembresia = montoCarrito * porcentajeMembresia;
    const descuentoCupon = montoCarrito * porcentajeCupon;
    const totalDescuentos = descuentoMembresia + descuentoCupon;

    const subtotalConDescuento = montoCarrito - totalDescuentos;

    let costoEnvio = 0;
    if (subtotalConDescuento <= 100000) {
        costoEnvio = 4500;
    }

    const totalNetoAPagar = subtotalConDescuento + costoEnvio;

    console.log("=========================================");
    console.log("       DETALLE DE COMPRA - E-COMMERCE    ");
    console.log("=========================================");
    console.log(`Monto inicial del carrito:  $${montoCarrito.toFixed(2)}`);
    console.log(`Desc. Membresía (${categoriaUsuario}): $${descuentoMembresia.toFixed(2)}`);
    console.log(`Desc. Cupón (${cupon || 'Ninguno'}):   $${descuentoCupon.toFixed(2)}`);
    console.log(`Total Descuentos:           $${totalDescuentos.toFixed(2)}`);
    console.log("-----------------------------------------");
    console.log(`Costo de Envío:             ${costoEnvio === 0 ? "GRATIS" : "$" + costoEnvio.toFixed(2)}`);
    console.log("=========================================");
    console.log(`TOTAL NETO A PAGAR:         $${totalNetoAPagar.toFixed(2)}`);
    console.log("=========================================");
}