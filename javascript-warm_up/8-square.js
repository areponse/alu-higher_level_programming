#!/usr/bin/node

let a;
let b = '';

if (!isNaN(parseInt(process.argv[2]))) {
  a = parseInt(process.argv[2]);
  let d = a;
  while (a > 0) {
    while (d > 0) {
      b += 'X';
      d--;
    }
    console.log(`${b}`);
    a--;
  }
} else {
  console.log('Missing size');
}
