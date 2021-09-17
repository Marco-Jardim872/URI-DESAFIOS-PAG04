var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let elementos=[];
count=0;

while(count<20){
  elementos.push(parseInt(dados.shift()));
  count++;
}

elementos.reverse();

for(let i=0; i < 20; i++){
  console.log("N[" + i +"] = "+ elementos[i]);
}
