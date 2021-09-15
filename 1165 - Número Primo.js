var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let testes = parseInt(dados.shift());
let count = 0;
let divisores=[];

while(count<testes){
  let num = parseInt(dados.shift());
  
  for(let i = 1; i <= num; i++){
    if(num % i === 0){
      divisores.push(i);
    }
  }

  if((divisores.length===2)&&(divisores[0]===1)&&(divisores[1]===num)){
    console.log(num + " eh primo");
  }else console.log(num + " nao eh primo");
  
  divisores=[];
  count++;
}