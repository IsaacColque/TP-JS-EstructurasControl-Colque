const saldoInicial = 250000;
let saldo = saldoInicial;

const opcion = prompt(
    "CAJERO AUTOMÁTICO\n\n" +
    "1 - Consultar Saldo\n" +
    "2 - Extraer Dinero\n" +
    "3 - Depositar Dinero\n" +
    "4 - Salir\n\n" +
    "Seleccione una opción:"
);

switch (opcion) {

    case "1":

        alert("Saldo disponible: $" + saldo);
        break;

    case "2":

        const montoExtraccion = parseFloat(
            prompt("Ingrese la cantidad a extraer:")
        );

        if (isNaN(montoExtraccion)) {

            alert(" Debe ingresar un número válido.");

        } else if (montoExtraccion <= 0) {

            alert(" El monto debe ser mayor a cero.");

        } else if (montoExtraccion % 1000 !== 0) {

            alert(
                " La cantidad debe ser múltiplo de $1.000."
            );

        } else if (montoExtraccion > saldo) {

            alert(" Saldo insuficiente.");

        } else {

            saldo = saldo - montoExtraccion;

            alert(
                "Extracción realizada correctamente.\n" +
                "Nuevo saldo: $" + saldo
            );
        }

        break;

    case "3":

        const montoDeposito = parseFloat(
            prompt("Ingrese el monto a depositar:")
        );

        if (isNaN(montoDeposito)) {

            alert(" Debe ingresar un número válido.");

        } else if (montoDeposito <= 0) {

            alert(" El monto debe ser mayor a cero.");

        } else {

            saldo = saldo + montoDeposito;

            alert(
                "Depósito realizado correctamente.\n" +
                "Nuevo saldo: $" + saldo
            );
        }

        break;

    case "4":

        alert("Gracias por utilizar el cajero.");
        break;

    default:

        alert("Opción no válida.");
}