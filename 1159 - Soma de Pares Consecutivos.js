var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num;
let soma=0;

while(num!==0){
     num = parseInt(dados.shift());
     if(num===0)break;
     for(let i = num; i < (num+10); i++){
        if(i%2===0){
            soma +=i;
        }
     }
     console.log(soma);
     soma=0;
}
