let rol = prompt("Ingrese su rol (admin, editor, cliente):");
let estado = prompt("Ingrese su estado (activo, suspendida):");
let hora = parseInt(prompt("Ingrese la hora actual (0-23):"));

if (estado === "suspendida" ) {
    alert("Acceso denegado : su cuenta esta suspendida.");
} else if (rol === "admin" )  {
    alert("Acceso permitido : Acceso total al sistema.");
} else if (rol === "editor") {
    if (hora >= 8 && hora <= 18) {
        alert("Acceso permitido : Puede editar contenido.");
} else {
        alert("Acceso denegado : Fuera del horario permitido para editar contenido.");
}
} else if (rol === "cliente") {
    alert("Acceso permitido : Puede ver contenido.");
} else {
    alert("Rol no autorizado : Acceso denegado.");
}