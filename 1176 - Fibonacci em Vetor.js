var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let N = parseInt(dados.shift());

let elementos=[0,1];
count=0;
soma=0;

while(count<N){
  let valor = parseInt(dados.shift());
  for(let i=0;i<=60;i++){
    soma+=(elementos[i]+elementos[i + 1]);
    elementos.push(soma);
    soma = 0;
  }
  console.log("Fib(" + valor + ") = "+ elementos[valor]);
  count++;
}