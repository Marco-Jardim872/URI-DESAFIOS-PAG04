var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let  num = parseInt(dados.shift());
let result=1;

for(let i = 1; i < num; i++){
    result = result*(num-i);
}

console.log(result*num);