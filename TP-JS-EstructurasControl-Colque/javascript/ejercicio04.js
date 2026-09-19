const distancia = parseFloat(prompt("Ingrese la distancia en kilómetros:"));
const tiempo = parseFloat(prompt("Ingrese el tiempo estimado en minutos:"));
const demanda = prompt("Ingrese la demanda (baja, media, alta):");

if (isNaN(distancia) || isNaN(tiempo)) {
    alert("Error: distancia y tiempo deben ser números válidos.");
} else {
    let factorDemanda;

    switch (demanda) {
        case "baja":
            factorDemanda = 1.0;
            break;

        case "media":
            factorDemanda = 1.3;
            break;

        case "alta":
            factorDemanda = 1.8;
            break;

        default:
            alert("Nivel de demanda no válido.");
            factorDemanda = 0;
    }

    if (factorDemanda > 0) {
        const bajadaBandera = 800;
        const costoKm = 350;
        const costoMinuto = 80;

        let total = bajadaBandera + 
                    (distancia * costoKm) + 
                    (tiempo * costoMinuto);

        total = total * factorDemanda;

        if (distancia > 20) {
            total = total + 1500;
        }

        alert("Costo estimado del viaje: $" + total);
    }
}