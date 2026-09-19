const ingresoMensual = parseFloat(
    prompt("Ingrese el ingreso mensual neto:")
);

const antiguedadLaboral = parseFloat(
    prompt("Ingrese la antigüedad laboral en años:")
);

const deudasPendientes = prompt(
    "¿Tiene deudas pendientes? (si/no)"
);

const montoCredito = parseFloat(
    prompt("Ingrese el monto del crédito solicitado:")
);

if (
    isNaN(ingresoMensual) ||
    isNaN(antiguedadLaboral) ||
    isNaN(montoCredito)
) {

    alert(" Debe ingresar valores numéricos válidos.");

} else if (deudasPendientes === "si") {

    alert("Solicitud Rechazada: posee deudas pendientes.");

} else if (antiguedadLaboral < 1) {

    alert(
        "Solicitud Rechazada: " +
        "debe tener al menos 1 año de antigüedad laboral."
    );

} else {

    const cuotaMensual =
        (montoCredito * 1.30) / 12;

    const limiteCuota =
        ingresoMensual * 0.30;

    if (cuotaMensual > limiteCuota) {

        alert(
            "Solicitud Rechazada.\n" +
            "Motivo: la cuota mensual de $" +
            cuotaMensual +
            " supera el 30% de su ingreso."
        );

    } else {

        alert("Solicitud Pre-Aprobada.");
    }
}