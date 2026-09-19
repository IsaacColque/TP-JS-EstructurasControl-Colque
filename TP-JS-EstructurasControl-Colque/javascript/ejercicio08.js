const montoCarrito = parseFloat(prompt("Ingrese el monto total del carrito:"));
const categoriaUsuario = prompt("Ingrese la categoría (Bronce, Plata, Oro):");
const codigoDescuento = prompt("Ingrese el código (DESC10, SUPER20 o ninguno):");

if (isNaN(montoCarrito)) {

    alert(" Debe ingresar un monto válido.");

} else {

    let descuentoMembresia = 0;

    switch (categoriaUsuario) {

        case "Bronce":
            descuentoMembresia = 0;
            break;

        case "Plata":
            descuentoMembresia = 0.05;
            break;

        case "Oro":
            descuentoMembresia = 0.15;
            break;

        default:
            alert("Categoría no válida.");
    }

    let descuentoCupon = 0;

    switch (codigoDescuento) {

        case "DESC10":
            descuentoCupon = 0.10;
            break;

        case "SUPER20":

            if (montoCarrito > 50000) {
                descuentoCupon = 0.20;
            }

            break;

        case "ninguno":
            descuentoCupon = 0;
            break;

        default:
            descuentoCupon = 0;
    }

    const descuentoTotal =
        descuentoMembresia + descuentoCupon;

    const montoFinalCompra =
        montoCarrito * (1 - descuentoTotal);

    let costoEnvio;

    if (montoFinalCompra > 100000) {
        costoEnvio = 0;
    } else {
        costoEnvio = 4500;
    }

    const totalNeto =
        montoFinalCompra + costoEnvio;

    console.log(" Detalle De Compra ");
    console.log("Monto del carrito: $" + montoCarrito);
    console.log("Descuento por membresía: " + (descuentoMembresia * 100) + "%");
    console.log("Descuento por cupón: " +(descuentoCupon * 100) + "%");
    console.log("Monto final de compra: $" +montoFinalCompra);

    if (costoEnvio === 0) {
        console.log("Costo de envío: GRATIS");
    } else {
        console.log("Costo de envío: $4500");
    }

    console.log(
        "Total neto a pagar: $" +
        totalNeto
    );
}