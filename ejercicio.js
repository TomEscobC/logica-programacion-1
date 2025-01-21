// Importar la librería prompt-sync
const prompt = require('prompt-sync')();

// Solicitar tres números al usuario
let num1 = prompt("Ingresa el primer número: ");
let num2 = prompt("Ingresa el segundo número: ");
let num3 = prompt("Ingresa el tercer número: ");

// Convertir los valores a números
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);

// Validar que las entradas sean números
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
  console.log("Por favor, ingresa solo números válidos.");
} else {
  // Crear un arreglo con los números
  let numeros = [num1, num2, num3];

  // Verificar si todos los números son iguales
  if (num1 === num2 && num2 === num3) {
    console.log("Todos los números son iguales:", numeros);
  } else {
    // Ordenar los números de mayor a menor
    let descendente = [...numeros].sort((a, b) => b - a);
    console.log("Números ordenados de mayor a menor:", descendente);

    // Ordenar los números de menor a mayor
    let ascendente = [...numeros].sort((a, b) => a - b);
    console.log("Números ordenados de menor a mayor:", ascendente);
  }
}
