var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let  num = (dados.shift()).split(" ");
let ele = num.filter((value)=>  value > 0);
let soma = 0;

for (let i = 0; i <= parseInt(ele[1])-1; i++){
    soma += (parseInt(ele[0])+i);
}


console.log(soma);