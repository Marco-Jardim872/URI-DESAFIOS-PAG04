var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let valor= parseInt(dados.shift());
let elementos=[];


for(let i = 0; i < 10; i++){
  elementos[0]=valor;
  elementos.push(elementos[i]*2);
  
  console.log("N[" + i +"] = "+ elementos[i]);
}
