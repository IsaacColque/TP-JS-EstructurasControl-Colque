const edad = prompt("Por favor, ingresa tu edad:");
const cobertura = prompt("Ingrese el tipo de cobertura (terceros, terceros_completo , todo_riesgo):");
const accidentes = parseInt(prompt("Ingrese la cantidad de accidentes del ultimo año:"));

if (isNaN(edad) || isNaN(accidentes)) {
    alert("Error : ingrese valores numéricos válidos ");
} else if (accidentes >= 3 && cobertura === "todo_riesgo") {
    alert("Contratación rechazada : con 3 o más accidentes, no se puede contratar la cobertura de todo riesgo.");
} else {
    let tarifaBase;
    switch (cobertura) {
        case "terceros":
            tarifaBase = 45000;
            break;

        case "terceros_completo":
            tarifaBase = 70000;
            break;

        case "todo_riesgo":
            tarifaBase = 110000;
            break;

        default:
            alert("Tipo de cobertura no válido.");
            tarifaBase = 0;

    } if (tarifaBase > 0) {
        let precioFinal = tarifaBase;

        if (edad < 25) {
            precioFinal = precioFinal * 1.20; // Aumenta un 20% para menores de 25 años
        }
        if (accidentes === 0) {
            precioFinal = precioFinal * 0.90; // Descuento del 10% para 0 accidentes
        }
        if (accidentes >= 3) {
            precioFinal = precioFinal * 1.30; // Aumenta un 30% para 3 o más accidentes
        }                           
        alert("Valor final de la póliza: $" + precioFinal);
    }
}


