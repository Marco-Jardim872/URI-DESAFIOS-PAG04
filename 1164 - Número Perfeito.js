var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let testes = parseInt(dados.shift());
let count = 0;

while(count<testes){
  let num = parseInt(dados.shift());
  let soma = 0;
  for(let i = 1; i < num; i++){
    if(num % i === 0){
      soma+=i;
    }
  }
  if(soma === num){
    console.log(num + " eh perfeito");
  }else console.log(num + " nao eh perfeito");
  
  count++;
}