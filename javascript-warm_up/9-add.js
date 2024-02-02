#!/usr/bin/node
/**
 *
 *  Primero se ccrea la funcion add, la cual se encarga de sumar dos numeros en caso de que sea esto posible. despues llamo a la funcion pasandole como argumentos el tercer y cuarto argumento ingresado
 **/
function add (a, b) {
  console.log(parseInt(a) + parseInt(b));
}
add(process.argv[2], process.argv[3]);
