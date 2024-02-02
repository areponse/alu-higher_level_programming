#!/usr/bin/node
/*
Write a script that prints a message depending of the number of arguments passed:
 *que verifica si se han pasado argumentos al ejecutar el script en Node.js.
El primer paso es utilizar la función process.argv para acceder a los argumentos
que fueron pasados cuando se ejecutó el comando en la terminal.
Luego, utilizando la sintaxis de desestructuración de arrays, se obtienen los
valores del array de argumentos a partir del tercer elemento
(ya que los dos primeros son el comando y el archivo que se está ejecutando).
Finalmente, se evalúa la longitud del array de argumentos y se imprime un
mensaje dependiendo de si hay argumentos o no. Si hay un solo argumento,
se imprime "Argument found", y si hay más de uno, se imprime "Arguments found".
Si no hay argumentos, se imprime "No argument".
*/

const [, , ...args] = process.argv;

if (args.length === 0) {
  console.log('No argument');
} else if (args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
