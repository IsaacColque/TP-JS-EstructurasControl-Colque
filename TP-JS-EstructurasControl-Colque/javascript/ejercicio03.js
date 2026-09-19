const sueldoBruto = parseFloat(prompt("Ingrese el sueldo bruto:"));

if (isNaN(sueldoBruto) || sueldoBruto < 0) {
    alert("Error: ingrese un sueldo válido.");
} else {
    const jubilacion = sueldoBruto * 0.11;
    const obraSocial = sueldoBruto * 0.03;
    const ley19032 = sueldoBruto * 0.03;

    const descuentosLey = jubilacion + obraSocial + ley19032;
    const sueldoNetoProvisorio = sueldoBruto - descuentosLey;

    let impuestoGanancias = 0;

    if (sueldoNetoProvisorio <= 1200000) {
        impuestoGanancias = 0;
    } else if (sueldoNetoProvisorio <= 2000000) {
        impuestoGanancias = (sueldoNetoProvisorio - 1200000) * 0.15;
    } else {
        impuestoGanancias = 120000 + (sueldoNetoProvisorio - 2000000) * 0.25;
    }

    const sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;

    console.log("===== RECIBO DE SUELDO =====");
    console.log("Sueldo Bruto: $" + sueldoBruto);
    console.log("Jubilación: $" + jubilacion);
    console.log("Obra Social: $" + obraSocial);
    console.log("Ley 19.032: $" + ley19032);
    console.log("Descuentos de Ley: $" + descuentosLey);
    console.log("Retención de Ganancias: $" + impuestoGanancias);
    console.log("Sueldo Neto Final: $" + sueldoNetoFinal);
}