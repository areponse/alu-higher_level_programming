#!/usr/bin/node

let a;
if (!process.argv[2]) {
  console.log('Missing number occurrences');
} else {
  a = process.argv[2];
  while (a > 0) {
    console.log(' C is Fun');
    a--;
  }
}
