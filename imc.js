
let peso = parseFloat(prompt("Ingrese su peso en kg:"));
let edad = parseInt(prompt("Ingrese su edad:"));  // Puedes cambiar este valor
let estatura = parseFloat(prompt("Ingrese su estatura en metros:"));


let clasificacion = "";
let alerta = false;


let imc = peso / (estatura * estatura);


if (imc < 18.5) {
    clasificacion = "Bajo peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    clasificacion = "Normal";
} else if (imc >= 25.0 && imc <= 29.9) {
    clasificacion = "Sobrepeso";
} else if (imc >= 30.0 && imc <= 34.9) {
    clasificacion = "Obesidad grado I";
} else if (imc >= 35.0 && imc <= 39.9) {
    clasificacion = "Obesidad grado II";
    if (edad > 60) {
        alerta = true;
    }
} else if (imc >= 40.0) {
    clasificacion = "Obesidad grado III";
    if (edad > 60) {
        alerta = true;
    }
}

let resultado = "Clasificación: " + clasificacion;
if (alerta) {
    resultado += " - Alerta: Riesgo cardiovascular";
}
console.log(resultado);