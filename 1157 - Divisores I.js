var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

for (let i = 1; i <= num;i++){
    if(num%i===0){
        console.log(i);
    }
}