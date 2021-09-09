var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados =input.split('\n');

let  num = parseInt(dados.shift());
let z;
let soma=0;
count=0;

for (let i = 0; i < dados.length; i++) {
    if(dados[i] > num){
        z=dados[i];
    }
}

for(let i = num; i < z; i++) {
    soma = soma+i;
    count++;
    if(soma>z)break;
}
console.log(count);