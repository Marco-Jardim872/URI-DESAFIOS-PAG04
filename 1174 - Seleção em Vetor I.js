var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');


let elementos=[];
for(let i = 0; i < 100; i++){
  elementos.push(parseFloat(dados.shift()));
    
  if(elementos[i]<=10){
    console.log("A[" + i +"] = "+ elementos[i].toFixed(1));
  }
    
}