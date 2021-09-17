var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

for(let i = 0; i < dados.length; i++){
  if(parseInt(dados[i])<=0){
    dados[i]=1;
  }
  console.log("X[" + i +"] = "+ parseInt(dados[i]));
}