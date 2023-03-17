//jshint esversion:6
// sirve para copiar las cosas del file1 al 2
/* const fs = require("fs");

fs.copyFileSync("file1.txt", "file2.txt") */

let superheroes = require("superheroes");
let supervillanos = require("supervillains");

let nuevoheroe = superheroes.random();
let nuevovillano = supervillanos.random();

console.log("tu nombre de heroe es " + nuevoheroe);
console.log("tu nombre de villano es " + nuevovillano);