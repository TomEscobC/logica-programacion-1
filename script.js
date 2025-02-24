// Solicitar 3 números al usuario
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Verificar si todos los números son iguales
if (num1 === num2 && num2 === num3) {
  console.log("Los tres números son iguales: ", num1, num2, num3);
} else {
  // Guardar los números en un arreglo para ordenarlos
  let numeros = [num1, num2, num3];

  // Ordenar de mayor a menor
  let mayorAMenor = [...numeros].sort((a, b) => b - a);
  console.log("De mayor a menor: ", mayorAMenor.join(", "));

  // Ordenar de menor a mayor
  let menorAMayor = [...numeros].sort((a, b) => a - b);
  console.log("De menor a mayor: ", menorAMayor.join(", "));
}
