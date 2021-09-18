var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let valor= parseInt(dados.shift());
let count=0;

while(count<1000){
  for(let i = 0; i < valor; i++){
    if(count>=1000)break;
    console.log("N[" + count +"] = "+ i);
    count++;
  }
}