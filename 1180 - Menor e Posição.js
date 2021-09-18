var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let elementos = (dados.shift()).split(" ");
let arr = elementos.map((value)=>parseInt(value));
let vetor = elementos.map((value)=>parseInt(value));

vetor.sort((a,b)=>a-b);

console.log("Menor valor: " + vetor[0]);
console.log("Posicao: " + arr.indexOf(vetor[0]));