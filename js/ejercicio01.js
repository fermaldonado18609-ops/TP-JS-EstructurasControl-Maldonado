const rolInput = prompt("Ingrese el rol de usuario (admin, editor, cliente):");
const rol = rolInput ? rolInput.toLowerCase().trim() : "";

const estadoInput = prompt("Ingrese el estado de la cuenta (activa, suspendida):");
const estadoCuenta = estadoInput ? estadoInput.toLowerCase().trim() : "";

const horaInput = parseInt(prompt("Ingrese la hora actual (0 a 23):"));

if (isNaN(horaInput) || horaInput < 0 || horaInput > 23) {
    alert("Hora inválida. Debe ingresar un entero entre 0 y 23.");
} else if (estadoCuenta === "suspendida") {
    alert("Acceso Denegado: Su cuenta se encuentra suspendida.");
} else {
    switch (rol) {
        case "admin":
            alert("Acceso Permitido: Control total del sistema.");
            break;
        case "editor":
            if (horaInput >= 8 && horaInput <= 18) {
                alert("Acceso Permitido: Bienvenido al módulo editor.");
            } else {
                alert("Acceso Denegado: Los editores solo ingresan de 8 a 18 hs.");
            }
            break;
        case "cliente":
            if (estadoCuenta === "activa") {
                alert("Acceso Permitido: Bienvenido a su cuenta de cliente.");
            } else {
                alert("Acceso Denegado: Estado de cuenta inválido.");
            }
            break;
        default:
            alert("Rol no autorizado.");
            break;
    }
}

